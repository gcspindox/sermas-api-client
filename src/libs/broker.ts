import { MqttClient, connectAsync } from 'mqtt';
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

  async setToken(token: string) {
    this.logger.debug(`Token updated, reconnecting`);
    this.client.options.username = token;
    this.client.reconnect();
  }

  async connect() {
    if (this.client) {
      try {
        this.client.end(true);
      } catch {
      } finally {
        this.client = undefined;
      }
    }

    this.client = await connectAsync(this.config.url, {
      username: this.config.username,
      password: this.config.password,
    });

    this.client.on('connect', () => {});

    this.client.on('error', (e: any) => {
      this.logger.error(`mqtt client error ${e.stack}`);
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

  async subscribe<T>(
    topic: string,
    callback: (ev: T) => void,
    params?: Record<string, any>,
  ) {
    topic = this.replaceTopicParams(topic, {
      ...(params || {}),
    });

    this.subscriptions.push({
      ...this.parseTopic(topic),
      topic,
      callback,
    });

    this.logger.debug(`SUB ${topic}`);
    await this.client.subscribeAsync(topic);

    // cancel function
    return () => {
      const index = this.subscriptions.findIndex((sub) => {
        return sub.topic === topic && sub.callback === callback;
      });
      if (index > -1) {
        this.subscriptions.splice(index, 1);
        if (this.subscriptions.filter((s) => s.topic === topic).length === 1)
          this.client.unsubscribe(topic);
      }
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
