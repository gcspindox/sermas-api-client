// generated, do not edit

import { Broker } from '../broker';
import {
  DialogueToolTriggeredEventDto,
  DialogueMessageDto,
  Buffer,
} from './models';

export class Dialogue {
  constructor(private readonly broker: Broker) {}

  async toolTriggered(
    event: DialogueToolTriggeredEventDto,
    params?: { appId?: string; name?: string },
  ) {
    return this.broker.publish<DialogueToolTriggeredEventDto>(
      'app/:appId/dialogue/tool/:name',
      event,
      params,
    );
  }

  async onToolTriggered(
    fn: (event: DialogueToolTriggeredEventDto) => void | Promise<void>,
    params?: { appId?: string; name?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueToolTriggeredEventDto>(
      'app/:appId/dialogue/tool/:name',
      fn,
      params,
    );
  }

  async dialogueMessages(
    event: DialogueMessageDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<DialogueMessageDto>(
      'app/:appId/dialogue/messages',
      event,
      params,
    );
  }

  async onDialogueMessages(
    fn: (event: DialogueMessageDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueMessageDto>(
      'app/:appId/dialogue/messages',
      fn,
      params,
    );
  }

  async agentSpeech(
    event: Buffer,
    params?: { appId?: string; sessionId?: string; chunkId?: string },
  ) {
    return this.broker.publish<Buffer>(
      'app/:appId/dialogue/speech/:sessionId/:chunkId',
      event,
      params,
    );
  }

  async onAgentSpeech(
    fn: (event: Buffer) => void | Promise<void>,
    params?: { appId?: string; sessionId?: string; chunkId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<Buffer>(
      'app/:appId/dialogue/speech/:sessionId/:chunkId',
      fn,
      params,
    );
  }
}
