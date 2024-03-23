// generated, do not edit

import { Broker } from '../broker';

import {
  UserDetectionEventDto,
  UserCharacterizationEventDto,
  AudioClassificationEventDto,
  ObjectDetectionEventDto,
  QRCodeEventDto,
  NoiseEventDto,
} from './models';
import { UserInteractionIntentionDto } from '../openapi/models';

export class Detection {
  constructor(private readonly broker: Broker) {}

  async userDetected(
    event: UserDetectionEventDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<UserDetectionEventDto>(
      'app/:appId/detection/user',
      event,
      params,
    );
  }

  async onUserDetected(
    fn: (event: UserDetectionEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UserDetectionEventDto>(
      'app/:appId/detection/user',
      fn,
      params,
    );
  }

  async interactionIntention(
    event: UserInteractionIntentionDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<UserInteractionIntentionDto>(
      'app/:appId/detection/interaction',
      event,
      params,
    );
  }

  async onInteractionIntention(
    fn: (event: UserInteractionIntentionDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UserInteractionIntentionDto>(
      'app/:appId/detection/interaction',
      fn,
      params,
    );
  }

  async userCharacterization(
    event: UserCharacterizationEventDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<UserCharacterizationEventDto>(
      'app/:appId/detection/characterization',
      event,
      params,
    );
  }

  async onUserCharacterization(
    fn: (event: UserCharacterizationEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UserCharacterizationEventDto>(
      'app/:appId/detection/characterization',
      fn,
      params,
    );
  }

  async audioClassification(
    event: AudioClassificationEventDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<AudioClassificationEventDto>(
      'app/:appId/detection/audio',
      event,
      params,
    );
  }

  async onAudioClassification(
    fn: (event: AudioClassificationEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<AudioClassificationEventDto>(
      'app/:appId/detection/audio',
      fn,
      params,
    );
  }

  async objectDetected(
    event: ObjectDetectionEventDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<ObjectDetectionEventDto>(
      'app/:appId/detection/object',
      event,
      params,
    );
  }

  async onObjectDetected(
    fn: (event: ObjectDetectionEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<ObjectDetectionEventDto>(
      'app/:appId/detection/object',
      fn,
      params,
    );
  }

  async qrCodeDetected(event: QRCodeEventDto, params?: { appId?: string }) {
    return this.broker.publish<QRCodeEventDto>(
      'app/:appId/detection/qr_code',
      event,
      params,
    );
  }

  async onQrCodeDetected(
    fn: (event: QRCodeEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<QRCodeEventDto>(
      'app/:appId/detection/qr_code',
      fn,
      params,
    );
  }

  async noise(event: NoiseEventDto, params?: { appId?: string }) {
    return this.broker.publish<NoiseEventDto>(
      'app/:appId/detection/noise',
      event,
      params,
    );
  }

  async onNoise(
    fn: (event: NoiseEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<NoiseEventDto>(
      'app/:appId/detection/noise',
      fn,
      params,
    );
  }
}
