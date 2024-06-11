// generated, do not edit

import { Broker } from '../broker';

import {
  SermasSessionDto,
  DialogueToolTriggeredEventDto,
  DialogueToolsRepositoryChanged,
} from './models';
import { DialogueMessageDto, Buffer } from '../openapi/models';

export class Dialogue {
  constructor(private readonly broker: Broker) {}

  async dialogueMessages(
    event: DialogueMessageDto,
    params?: { appId?: string; sessionId?: string },
  ) {
    return this.broker.publish<DialogueMessageDto>(
      'app/:appId/dialogue/messages/:sessionId',
      event,
      params,
    );
  }

  async onDialogueMessages(
    fn: (event: DialogueMessageDto) => void | Promise<void>,
    params?: { appId?: string; sessionId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueMessageDto>(
      'app/:appId/dialogue/messages/:sessionId',
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

  async agentStopSpeech(
    event: SermasSessionDto,
    params?: { appId?: string; sessionId?: string },
  ) {
    return this.broker.publish<SermasSessionDto>(
      'app/:appId/dialogue/stop/:sessionId',
      event,
      params,
    );
  }

  async onAgentStopSpeech(
    fn: (event: SermasSessionDto) => void | Promise<void>,
    params?: { appId?: string; sessionId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<SermasSessionDto>(
      'app/:appId/dialogue/stop/:sessionId',
      fn,
      params,
    );
  }

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

  async toolChanged(
    event: DialogueToolsRepositoryChanged,
    params?: { appId?: string; repositoryId?: string },
  ) {
    return this.broker.publish<DialogueToolsRepositoryChanged>(
      'app/:appId/dialogue/tool/changed/:repositoryId',
      event,
      params,
    );
  }

  async onToolChanged(
    fn: (event: DialogueToolsRepositoryChanged) => void | Promise<void>,
    params?: { appId?: string; repositoryId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueToolsRepositoryChanged>(
      'app/:appId/dialogue/tool/changed/:repositoryId',
      fn,
      params,
    );
  }
}
