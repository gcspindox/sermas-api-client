// generated, do not edit

import { Broker } from '../broker';

import { UIStatusDto, UIInteractionEventDto } from './models';
import { UIContentDto } from '../openapi/models';

export class Ui {
  constructor(private readonly broker: Broker) {}

  async assetChange(event: UIStatusDto, params?: { appId?: string }) {
    return this.broker.publish<UIStatusDto>(
      'app/:appId/ui/status',
      event,
      params,
    );
  }

  async onAssetChange(
    fn: (event: UIStatusDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UIStatusDto>(
      'app/:appId/ui/status',
      fn,
      params,
    );
  }

  async content(event: UIContentDto, params?: { appId?: string }) {
    return this.broker.publish<UIContentDto>(
      'app/:appId/ui/content',
      event,
      params,
    );
  }

  async onContent(
    fn: (event: UIContentDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UIContentDto>(
      'app/:appId/ui/content',
      fn,
      params,
    );
  }

  async interaction(
    event: UIInteractionEventDto,
    params?: { appId?: string; moduleId?: string },
  ) {
    return this.broker.publish<UIInteractionEventDto>(
      'app/:appId/ui/interaction/:moduleId',
      event,
      params,
    );
  }

  async onInteraction(
    fn: (event: UIInteractionEventDto) => void | Promise<void>,
    params?: { appId?: string; moduleId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UIInteractionEventDto>(
      'app/:appId/ui/interaction/:moduleId',
      fn,
      params,
    );
  }
}
