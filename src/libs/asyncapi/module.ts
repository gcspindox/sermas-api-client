// generated, do not edit

import { Broker } from '../broker';

import { ModuleConfigEventDto } from './models';

export class Module {
  constructor(private readonly broker: Broker) {}

  async moduleChanged(
    event: ModuleConfigEventDto,
    params?: { moduleId?: string },
  ) {
    return this.broker.publish<ModuleConfigEventDto>(
      'system/platform/module/changed/:moduleId',
      event,
      params,
    );
  }

  async onModuleChanged(
    fn: (event: ModuleConfigEventDto) => void | Promise<void>,
    params?: { moduleId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<ModuleConfigEventDto>(
      'system/platform/module/changed/:moduleId',
      fn,
      params,
    );
  }
}
