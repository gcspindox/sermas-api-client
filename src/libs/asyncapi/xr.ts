// generated, do not edit

import { Broker } from '../broker';

import { XRMarkerChangedDto, XROcclusionDto } from './models';
import { XRMarkerDto } from '../openapi/models';

export class Xr {
  constructor(private readonly broker: Broker) {}

  async detected(event: XRMarkerDto, params?: { appId?: string }) {
    return this.broker.publish<XRMarkerDto>(
      'app/:appId/xr/marker/detected',
      event,
      params,
    );
  }

  async onDetected(
    fn: (event: XRMarkerDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XRMarkerDto>(
      'app/:appId/xr/marker/detected',
      fn,
      params,
    );
  }

  async changed(
    event: XRMarkerChangedDto,
    params?: { appId?: string; markerId?: string },
  ) {
    return this.broker.publish<XRMarkerChangedDto>(
      'app/:appId/xr/marker/changed/:markerId',
      event,
      params,
    );
  }

  async onChanged(
    fn: (event: XRMarkerChangedDto) => void | Promise<void>,
    params?: { appId?: string; markerId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XRMarkerChangedDto>(
      'app/:appId/xr/marker/changed/:markerId',
      fn,
      params,
    );
  }

  async occluded(event: XROcclusionDto, params?: { appId?: string }) {
    return this.broker.publish<XROcclusionDto>(
      'app/:appId/xr/occlusion',
      event,
      params,
    );
  }

  async onOccluded(
    fn: (event: XROcclusionDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<XROcclusionDto>(
      'app/:appId/xr/occlusion',
      fn,
      params,
    );
  }
}
