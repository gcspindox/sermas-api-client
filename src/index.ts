import { jwtDecode } from 'jwt-decode';
import AsyncApiClient from './libs/asyncapi';
import { Broker } from './libs/broker';
import { Logger, setDefaultLogger } from './libs/logger';
import { LoggerService } from './libs/logger.dto';
import { LoginResponseDto, SermasApi, type AuthJwtUser } from './libs/openapi';

export type * from './libs/asyncapi/models';
export type * from './libs/openapi/models';

export { type MqttClient } from 'mqtt';
export { type Broker } from './libs/broker';

export const sleep = (t = 1000) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), t));

const DEFAULT_URL = `http://localhost:8080`;

export type SermasEnvType = 'local' | 'dev' | 'prod';

export interface SermasApiClientConfig {
  access_token?: string;
  refresh_token?: string;

  clientId?: string;
  clientSecret?: string;

  baseURL?: string;

  appId?: string;

  logger?: LoggerService;
}

export const createSermasClient = async (config: SermasApiClientConfig) => {
  const client = new SermasApiClient(config);
  if (config.access_token) await client.init();
  return client;
};

export class SermasApiClient {
  private readonly logger = new Logger('SermasApiClient');

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
    if (config.logger) {
      setDefaultLogger(config.logger);
    }

    const baseUrl = config.baseURL || DEFAULT_URL;
    this.apiUrl = `${baseUrl}`;
    const url = new URL(this.apiUrl);
    const isSSL = url.protocol.startsWith('https');
    this.mqttUrl = `ws${isSSL ? 's' : ''}://${url.hostname}:${isSSL ? '443' : '80'}/mqtt`;

    this.logger.debug(`API url ${this.apiUrl}`);
    this.logger.debug(`MQTT url ${this.mqttUrl}`);

    this.api = new SermasApi({
      BASE: this.apiUrl,
      TOKEN: this.config.access_token || undefined,
    });

    this.broker = new Broker({
      url: this.mqttUrl,
      username: this.config.access_token || undefined,
      password: 'api-client',
      params: this.params,
    });

    this.events = new AsyncApiClient(this.broker);
  }

  getBroker(): Broker {
    return this.broker || null;
  }

  setParams(params: Record<string, any>) {
    this.params = { ...params };
  }

  async init(force = false) {
    if (force) this.ready = false;
    if (this.ready) return;

    if (!this.config.access_token) {
      this.logger.debug(`Access token not set, skip client init`);
      return;
    }

    this.api.request.config.TOKEN = this.config.access_token;

    this.params = {
      appId: this.config.appId,
    };

    await this.broker.setToken(this.config.access_token);

    if (!this.broker.getClient()?.connected) {
      this.logger.verbose(`Connecting to broker`);
      await this.broker.connect();
    }

    const jwt = jwtDecode<AuthJwtUser>(this.config.access_token);
    this.jwt = jwt;

    this.config.clientId = this.config.clientId || jwt.aud;

    const expiresDate = new Date(jwt.exp * 1000);
    const timeout = expiresDate.getTime() - Date.now() - 30 * 1000;
    // timeout = 1000;

    this.logger.verbose(
      `Token expires in ${Math.round(timeout / 1000 / 60 / 60)}min`,
    );

    if (this.refreshTimeout) clearTimeout(this.refreshTimeout);
    this.refreshTimeout = setTimeout(() => this.refreshToken(), timeout);

    this.ready = true;
  }

  async refreshToken() {
    this.logger.verbose(`Refreshing token`);
    let res;
    try {
      res = await this.api.platform.getClientRefreshToken({
        refreshToken: this.config.refresh_token,
        appId: this.config.appId,
        clientId: this.config.clientId,
        clientSecret: this.config.clientSecret,
      });
    } catch (e) {
      this.logger.error(`Refresh token failed: ${e.stack}`);
      return;
    }

    if (!res) {
      this.logger.warn(`Failed to refresh token, no response`);
      return;
    }

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

    this.config.clientId = clientId;
    this.config.clientSecret = clientSecret;
    this.config.appId = appId || this.config.appId;

    this.config.access_token = res.access_token;
    this.config.refresh_token = res.refresh_token;

    await this.init(true);
    return res;
  }

  async setToken(
    accessToken: string | LoginResponseDto,
    refreshToken?: string,
  ) {
    if (typeof accessToken !== 'string') {
      const loginToken: LoginResponseDto = accessToken;
      accessToken = loginToken.access_token;
      refreshToken = loginToken.refresh_token;
    }

    this.config.access_token = accessToken;
    this.config.refresh_token = refreshToken;
    console.warn('XXXXXXXXXXXXXXXXXXXXXXXX token', this.config);

    await this.init(true);
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
