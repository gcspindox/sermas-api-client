// generated, do not edit

import { Broker } from '../broker';

import {
  SessionChangedDto,
  SessionSupportEventDto,
  SessionStorageEventDto,
  AgentDto,
  AgentChangedDto,
} from './models';
import { SessionDto } from '../openapi/models';

export class Session {
  constructor(private readonly broker: Broker) {}

  async userInteraction(event: SessionDto, params?: { appId?: string }) {
    return this.broker.publish<SessionDto>(
      'app/:appId/session/interaction/user',
      event,
      params,
    );
  }

  async onUserInteraction(
    fn: (event: SessionDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<SessionDto>(
      'app/:appId/session/interaction/user',
      fn,
      params,
    );
  }

  async sessionChanged(
    event: SessionChangedDto,
    params?: { appId?: string; sessionId?: string },
  ) {
    return this.broker.publish<SessionChangedDto>(
      'app/:appId/session/session/changed/:sessionId',
      event,
      params,
    );
  }

  async onSessionChanged(
    fn: (event: SessionChangedDto) => void | Promise<void>,
    params?: { appId?: string; sessionId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<SessionChangedDto>(
      'app/:appId/session/session/changed/:sessionId',
      fn,
      params,
    );
  }

  async support(event: SessionSupportEventDto, params?: { appId?: string }) {
    return this.broker.publish<SessionSupportEventDto>(
      'app/:appId/session/support',
      event,
      params,
    );
  }

  async onSupport(
    fn: (event: SessionSupportEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<SessionSupportEventDto>(
      'app/:appId/session/support',
      fn,
      params,
    );
  }

  async storageUpdated(
    event: SessionStorageEventDto,
    params?: { appId?: string; storageId?: string },
  ) {
    return this.broker.publish<SessionStorageEventDto>(
      'app/:appId/session/storage/:storageId',
      event,
      params,
    );
  }

  async onStorageUpdated(
    fn: (event: SessionStorageEventDto) => void | Promise<void>,
    params?: { appId?: string; storageId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<SessionStorageEventDto>(
      'app/:appId/session/storage/:storageId',
      fn,
      params,
    );
  }

  async agentInteraction(event: AgentDto, params?: { appId?: string }) {
    return this.broker.publish<AgentDto>(
      'app/:appId/session/interaction/agent',
      event,
      params,
    );
  }

  async onAgentInteraction(
    fn: (event: AgentDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<AgentDto>(
      'app/:appId/session/interaction/agent',
      fn,
      params,
    );
  }

  async agentChanged(
    event: AgentChangedDto,
    params?: { appId?: string; agentId?: string },
  ) {
    return this.broker.publish<AgentChangedDto>(
      'app/:appId/session/agent/changed/:agentId',
      event,
      params,
    );
  }

  async onAgentChanged(
    fn: (event: AgentChangedDto) => void | Promise<void>,
    params?: { appId?: string; agentId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<AgentChangedDto>(
      'app/:appId/session/agent/changed/:agentId',
      fn,
      params,
    );
  }
}
