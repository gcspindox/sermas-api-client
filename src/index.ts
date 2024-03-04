import dotenv from 'dotenv';
import { jwtDecode } from 'jwt-decode';
import AsyncApiClient from './libs/asyncapi';
import { NoiseEventDto } from './libs/asyncapi/models';
import { Broker } from './libs/broker';
import { Logger, setDefaultLogger } from './libs/logger';
import { LoggerService } from './libs/logger.dto';
import { AuthJwtUser, SermasApi } from './libs/openapi';

export const sleep = (t = 1000) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), t));

const BASE_DOMAIN = `prod.sermas.spindoxlabs.it`;

type envType = 'local' | 'dev' | 'prod';

export interface SermasApiClientConfig {
  domain?: string;
  access_token?: string;
  refresh_token?: string;

  env?: envType;
  appId?: string;

  logger?: LoggerService;
}

export const createSermasClient = async (config: SermasApiClientConfig) => {
  if (config.logger) {
    setDefaultLogger(config.logger);
  }

  const client = new SermasApiClient(config);
  if (config.access_token) await client.init();
  return client;
};

export class SermasApiClient {
  private readonly logger = new Logger(SermasApiClient.name);

  public api: SermasApi;
  public events: AsyncApiClient;

  private broker: Broker;
  private apiUrl: string;
  private mqttUrl: string;

  private refreshTimeout: NodeJS.Timeout;

  private ready = false;

  private jwt: AuthJwtUser;

  private params: Record<string, any> = {};

  constructor(private readonly config: SermasApiClientConfig) {
    let domain = config.domain || BASE_DOMAIN;
    if (!config.domain && config.env) {
      domain = BASE_DOMAIN.replace('prod.', `${config.env}.`);
    }

    this.config.domain = domain;

    this.apiUrl = `https://${domain}`;
    this.mqttUrl = `wss://${domain}:443/mqtt`;
  }

  async init(force = false) {
    if (force) this.ready = false;

    if (this.ready) return;

    if (!this.api) {
      this.api = new SermasApi({
        BASE: this.apiUrl,
        TOKEN: this.config.access_token,
      });
    } else {
      this.api.request.config.TOKEN = this.config.access_token;
    }

    if (!this.broker) {
      this.params = {
        appId: this.config.appId,
      };

      this.broker = new Broker({
        url: this.mqttUrl,
        username: this.config.access_token,
        password: 'api-client',
        params: this.params,
      });
      await this.broker.connect();
    } else {
      this.broker.setToken(this.config.access_token);
    }

    this.events = new AsyncApiClient(this.broker);

    const jwt = jwtDecode<AuthJwtUser>(this.config.access_token);
    this.jwt = jwt;
    const expires = (jwt.exp - 10) * 1000 - Date.now();
    if (this.refreshTimeout) clearTimeout(this.refreshTimeout);
    this.refreshTimeout = setTimeout(() => this.refreshToken(), expires);

    this.ready = true;
  }

  async refreshToken() {
    this.logger.log(`Refreshing token`);
    let res;
    try {
      res = await this.api.platform.getClientRefreshToken({
        refreshToken: this.config.refresh_token,
        appId: this.config.appId,
      });
    } catch (e) {
      this.logger.error(`Refresh token failed: ${e.stack}`);
      return;
    }

    this.logger.debug(
      `Expires in ${res.expires_in * 1000 - Date.now() / 1000 / 60 / 60}min`,
    );
    this.config.access_token = res.access_token;
    this.config.refresh_token = res.refresh_token;

    await this.init(true);
    return res;
  }

  async loadToken(clientId, clientSecret, appId?: string) {
    const client = new SermasApi({
      BASE: this.apiUrl,
    });

    this.config.appId = appId || this.config.appId;

    const res = await client.platform.getClientAccessToken({
      clientId,
      clientSecret,
      appId: this.config.appId,
    });

    this.logger.debug(
      `Expires in ${res.expires_in * 1000 - Date.now() / 1000 / 60 / 60}min`,
    );

    this.config.access_token = res.access_token;
    this.config.refresh_token = res.refresh_token;

    await this.init(true);
    return res;
  }

  async login(username, password, appId?: string) {
    const client = new SermasApi({
      BASE: this.apiUrl,
    });

    this.config.appId = appId || this.config.appId;

    const res = await client.authentication.login({
      username,
      password,
      appId: this.config.appId,
    });

    this.config.access_token = res.access_token;
    this.config.refresh_token = res.refresh_token;

    await this.init(true);

    return res;
  }
}

if (require.main === module) {
  (async () => {
    dotenv.config();

    const client = await createSermasClient({
      env: (process.env.ENV as envType) || 'local',
    });

    await client.login(process.env.USERNAME, process.env.PASSWORD);
    console.log('Logged in');

    const cancelSub = await client.events.detection.onNoise(
      (ev: NoiseEventDto) => {
        console.log('Got noise', ev);
      },
      {
        appId: 'asa',
      },
    );

    console.log('subscribed');
    await sleep();

    await client.events.detection.noise({
      appId: 'test',
      level: '100',
      noiseType: 'foo',
      speakerId: ['123456789'],
    });

    await sleep();
    cancelSub();
  })();
}
