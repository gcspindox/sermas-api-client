// generated, do not edit

import { Broker } from '../broker';

import { InitialPoseEventDto } from './models';
import {
  ActuationEventDto,
  MovementEventDto,
  StatusEventDto,
} from '../openapi/models';

export class Robotics {
  constructor(private readonly broker: Broker) {}

  async actuate(event: ActuationEventDto, params?: { appId?: string }) {
    return this.broker.publish<ActuationEventDto>(
      'app/:appId/robotics/actuate',
      event,
      params,
    );
  }

  async onActuate(
    fn: (event: ActuationEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<ActuationEventDto>(
      'app/:appId/robotics/actuate',
      fn,
      params,
    );
  }

  async move(event: MovementEventDto, params?: { appId?: string }) {
    return this.broker.publish<MovementEventDto>(
      'app/:appId/robotics/move',
      event,
      params,
    );
  }

  async onMove(
    fn: (event: MovementEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<MovementEventDto>(
      'app/:appId/robotics/move',
      fn,
      params,
    );
  }

  async robotStatus(event: StatusEventDto, params?: { appId?: string }) {
    return this.broker.publish<StatusEventDto>(
      'app/:appId/robotics/status',
      event,
      params,
    );
  }

  async onRobotStatus(
    fn: (event: StatusEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<StatusEventDto>(
      'app/:appId/robotics/status',
      fn,
      params,
    );
  }

  async initialPose(event: InitialPoseEventDto, params?: { appId?: string }) {
    return this.broker.publish<InitialPoseEventDto>(
      'app/:appId/robotics/initialpose',
      event,
      params,
    );
  }

  async onInitialPose(
    fn: (event: InitialPoseEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<InitialPoseEventDto>(
      'app/:appId/robotics/initialpose',
      fn,
      params,
    );
  }
}
