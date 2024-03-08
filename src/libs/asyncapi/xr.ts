// generated, do not edit

import { Broker } from '../broker';

import { XrMarkerDetectedDto, XrMarkerDto, XrOcclusionDto } from './models';

export class Xr {
  constructor(private readonly broker: Broker) {}

  async detected(event: XrMarkerDetectedDto, params?: { appId?: string }) {
    return this.broker.publish<XrMarkerDetectedDto>(
      'app/:appId/xr/marker/detected',
      event,
      params,
    );
  }

  async onDetected(
    fn: (event: XrMarkerDetectedDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XrMarkerDetectedDto>(
      'app/:appId/xr/marker/detected',
      fn,
      params,
    );
  }

  async changed(
    event: XrMarkerDto,
    params?: { appId?: string; markerId?: string },
  ) {
    return this.broker.publish<XrMarkerDto>(
      'app/:appId/xr/marker/changed/:markerId',
      event,
      params,
    );
  }

  async onChanged(
    fn: (event: XrMarkerDto) => void | Promise<void>,
    params?: { appId?: string; markerId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XrMarkerDto>(
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
