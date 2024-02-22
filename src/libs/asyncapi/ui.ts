// generated, do not edit

import { Broker } from '../broker';
import { UiStatusDto, UiContentDto, UiInteractionEventDto } from './models';

export class Ui {
  constructor(private readonly broker: Broker) {}

  async assetChange(event: UiStatusDto, params?: { appId?: string }) {
    return this.broker.publish<UiStatusDto>(
      'app/:appId/ui/status',
      event,
      params,
    );
  }

  async onAssetChange(
    fn: (event: UiStatusDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UiStatusDto>(
      'app/:appId/ui/status',
      fn,
      params,
    );
  }

  async content(event: UiContentDto, params?: { appId?: string }) {
    return this.broker.publish<UiContentDto>(
      'app/:appId/ui/content',
      event,
      params,
    );
  }

  async onContent(
    fn: (event: UiContentDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UiContentDto>(
      'app/:appId/ui/content',
      fn,
      params,
    );
  }

  async interaction(
    event: UiInteractionEventDto,
    params?: { appId?: string; moduleId?: string },
  ) {
    return this.broker.publish<UiInteractionEventDto>(
      'app/:appId/ui/interaction/:moduleId',
      event,
      params,
    );
  }

  async onInteraction(
    fn: (event: UiInteractionEventDto) => void | Promise<void>,
    params?: { appId?: string; moduleId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UiInteractionEventDto>(
      'app/:appId/ui/interaction/:moduleId',
      fn,
      params,
    );
  }
}
