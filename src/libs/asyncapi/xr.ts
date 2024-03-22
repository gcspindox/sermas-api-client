// generated, do not edit

import { Broker } from '../broker';

import { XrMarkerDto, XrMarkerChangedDto, XrOcclusionDto } from './models';

export class Xr {
  constructor(private readonly broker: Broker) {}

  async detected(event: XrMarkerDto, params?: { appId?: string }) {
    return this.broker.publish<XrMarkerDto>(
      'app/:appId/xr/marker/detected',
      event,
      params,
    );
  }

  async onDetected(
    fn: (event: XrMarkerDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XrMarkerDto>(
      'app/:appId/xr/marker/detected',
      fn,
      params,
    );
  }

  async changed(
    event: XrMarkerChangedDto,
    params?: { appId?: string; markerId?: string },
  ) {
    return this.broker.publish<XrMarkerChangedDto>(
      'app/:appId/xr/marker/changed/:markerId',
      event,
      params,
    );
  }

  async onChanged(
    fn: (event: XrMarkerChangedDto) => void | Promise<void>,
    params?: { appId?: string; markerId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XrMarkerChangedDto>(
      'app/:appId/xr/marker/changed/:markerId',
      fn,
      params,
    );
  }

  async occluded(event: XrOcclusionDto, params?: { appId?: string }) {
    return this.broker.publish<XrOcclusionDto>(
      'app/:appId/xr/occlusion',
      event,
      params,
    );
  }

  async onOccluded(
    fn: (event: XrOcclusionDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XrOcclusionDto>(
      'app/:appId/xr/occlusion',
      fn,
      params,
    );
  }
}
