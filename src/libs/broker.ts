import mqtt, { type MqttClient } from 'mqtt';
import { Logger } from './logger';

export class Broker {
  private readonly logger = new Logger(Broker.name);

  private client: MqttClient;
  private subscriptions: {
    topic: string;
    type: string;
    appId: string;
    resource: string;
    scope: string;
    context: string[];
    callback: (ev: any) => void;
  }[] = [];

  constructor(
    private readonly config: {
      url: string;
      username: string;
      password: string;
      params: Record<string, any>;
    },
  ) {}

  async disconnect() {
    if (!this.client) return;
    try {
      await this.client.endAsync(true);
    } catch (e: any) {
      this.logger.warn(`Error closing broker connection: ${e.stack}`);
    }
  }

  setParams(params: Record<string, any>) {
    this.config.params = params;
  }

  setToken(token: string) {
    this.config.username = token;

    if (!this.client) return;

    this.logger.debug(`Token updated, reconnecting`);
    this.client.options.username = token;
    this.client.reconnect();
  }

  getClient() {
    return this.client || null;
  }

  connect() {
    if (this.client) return;

    if (!this.config.username) {
      this.logger.debug(`Skip mqtt connection, missing token`);
      return;
    }

    this.logger.debug(`Connecting to ${this.config.url}`);
    this.client = mqtt.connect(this.config.url, {
      username: this.config.username,
      password: this.config.password,
    });

    this.client.on('connect', async () => {
      this.logger.debug('client connected');
      for (const sub of this.subscriptions) {
        try {
          this.logger.debug(`SUB ${sub.topic}`);
          await this.client.subscribeAsync(sub.topic);
        } catch (e: any) {
          this.logger.warn(`Failed to subscribe ${sub.topic}: ${e.stack}`);
        }
      }
    });

    this.client.on('error', (e: any) => {
      this.logger.error(`mqtt client error ${e.stack}`);
    });

    this.client.on('disconnect', () => {
      this.logger.warn(`mqtt disconnected`);
    });

    this.client.on('reconnect', () => {
      this.logger.debug(`mqtt reconnecting`);
    });

    this.client.on('connect', () => {
      this.logger.debug(`mqtt connected`);
    });

    this.client.on('message', (topic, message) => {
      let payload = message;
      try {
        payload = JSON.parse(message.toString());
      } catch {}

      this.logger.debug(`MSG ${topic}`);

      const catchAllIndex = topic.indexOf('#');
      if (catchAllIndex > -1) {
        topic = topic.substring(0, catchAllIndex);
      }

      const parsed = this.parseTopic(topic);

      const isWildcard = (part: string) => part === '+';

      this.subscriptions.forEach((sub) => {
        // console.log('2', parsed, sub);

        if (sub.type !== parsed.type) return;

        // console.log('3', parsed, sub);
        if (!isWildcard(sub.appId) && sub.appId !== parsed.appId) return;

        // console.log('4', parsed);
        if (!isWildcard(sub.resource) && sub.resource !== parsed.resource)
          return;

        // console.log('5', parsed);
        if (!isWildcard(sub.scope) && sub.scope !== parsed.scope) return;

        for (const i in parsed.context || []) {
          // console.log('6.' + i, sub, parsed);
          if (
            !isWildcard(sub.context[i]) &&
            sub.context[i] !== parsed.context[i]
          )
            return;
        }

        // console.log('matches', sub);

        sub.callback(payload);
      });
    });
  }

  parseTopic(topic: string) {
    const parts = topic.split('/');
    const [type, appId, resource, scope] = parts;
    const context = parts.slice(3);
    return { type, appId, resource, scope, context };
  }

  subscribe<T>(
    topic: string,
    callback: (ev: T) => void,
    params?: Record<string, any>,
  ) {
    this.connect();

    topic = this.replaceTopicParams(topic, {
      ...(params || {}),
    });

    this.subscriptions.push({
      ...this.parseTopic(topic),
      topic,
      callback,
    });

    // cancel function
    return () => {
      const index = this.subscriptions.findIndex((sub) => {
        return sub.topic === topic && sub.callback === callback;
      });

      if (index === -1) return null;

      const sub = this.subscriptions[index];
      this.subscriptions.splice(index, 1);
      try {
        this.client.unsubscribe(sub.topic, sub.callback);
      } catch {}
    };
  }

  async publish<T>(
    topic: string,
    ev: T | Buffer,
    params?: Record<string, string>,
  ) {
    const isBuffer = (ev as any).byteLength !== undefined;
    let payload: string | Buffer;
    if (isBuffer) {
      payload = ev as Buffer;
    } else {
      payload = JSON.stringify(ev);
    }
    try {
      topic = this.replaceTopicParams(topic, {
        ...(!isBuffer ? ev : {}),
        ...(params || {}),
      });
      await this.client.publishAsync(topic, payload);
    } catch {
      return false;
    }
    return true;
  }

  replaceTopicParams(topic: string, params?: Record<string, any>): string {
    params = {
      ...(this.config?.params || {}),
      ...(params || {}),
    };

    for (const key of Object.keys(params)) {
      const placeholder = `:${key}`;
      const value: any = params[key];

      if (value === undefined || value === null) continue;

      if (typeof value === 'object' && !Array.isArray(value)) {
        topic = this.replaceTopicParams(topic, value);
        continue;
      }

      if (typeof value !== 'string' && typeof value !== 'number') continue;

      while (topic.indexOf(placeholder) > -1) {
        topic = topic.replace(placeholder, value.toString());
      }
    }

    topic = topic
      .split('/')
      .map((part) => (part[0] === ':' ? '+' : part))
      .join('/');

    return topic;
  }
}
