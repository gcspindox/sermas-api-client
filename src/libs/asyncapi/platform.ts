// generated, do not edit

import { Broker } from '../broker';

import {
  PlatformTokenDto,
  PlatformAppChangedDto,
  PlatformAppClientChangedDto,
  PlatformAppModuleConfigEventDto,
} from './models';
import { MonitoringRecordDto } from '../openapi/models';

export class Platform {
  constructor(private readonly broker: Broker) {}

  async tokenRequested(event: PlatformTokenDto, params?: { appId?: string }) {
    return this.broker.publish<PlatformTokenDto>(
      'app/:appId/platform/token',
      event,
      params,
    );
  }

  async onTokenRequested(
    fn: (event: PlatformTokenDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<PlatformTokenDto>(
      'app/:appId/platform/token',
      fn,
      params,
    );
  }

  async appChanged(event: PlatformAppChangedDto, params?: { appId?: string }) {
    return this.broker.publish<PlatformAppChangedDto>(
      'app/:appId/platform/app/changed/:appId',
      event,
      params,
    );
  }

  async onAppChanged(
    fn: (event: PlatformAppChangedDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<PlatformAppChangedDto>(
      'app/:appId/platform/app/changed/:appId',
      fn,
      params,
    );
  }

  async clientChanged(
    event: PlatformAppClientChangedDto,
    params?: { appId?: string; clientId?: string },
  ) {
    return this.broker.publish<PlatformAppClientChangedDto>(
      'app/:appId/platform/client/changed/:clientId',
      event,
      params,
    );
  }

  async onClientChanged(
    fn: (event: PlatformAppClientChangedDto) => void | Promise<void>,
    params?: { appId?: string; clientId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<PlatformAppClientChangedDto>(
      'app/:appId/platform/client/changed/:clientId',
      fn,
      params,
    );
  }

  async appModuleChanged(
    event: PlatformAppModuleConfigEventDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<PlatformAppModuleConfigEventDto>(
      'app/:appId/platform/module',
      event,
      params,
    );
  }

  async onAppModuleChanged(
    fn: (event: PlatformAppModuleConfigEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<PlatformAppModuleConfigEventDto>(
      'app/:appId/platform/module',
      fn,
      params,
    );
  }

  async record(event: MonitoringRecordDto, params?: { appId?: string }) {
    return this.broker.publish<MonitoringRecordDto>(
      'app/:appId/platform/monitoring',
      event,
      params,
    );
  }

  async onRecord(
    fn: (event: MonitoringRecordDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<MonitoringRecordDto>(
      'app/:appId/platform/monitoring',
      fn,
      params,
    );
  }
}
