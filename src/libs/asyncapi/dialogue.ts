// generated, do not edit

import { Broker } from '../broker';

import {
  SermasSessionDto,
  DialogueSpeechToTextDto,
  DialogueTaskChangedDto,
  DialogueTaskProgressDto,
  DialogueTaskRecordChangedDto,
  DialogueTaskRecordHandlerDto,
  DialogueToolTriggeredEventDto,
  DialogueToolsRepositoryChanged,
  DialogueToolNotMatchingEventDto,
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
    params?: {
      appId?: string;
      sessionId?: string;
      messageId?: string;
      chunkId?: string;
    },
  ) {
    return this.broker.publish<Buffer>(
      'app/:appId/dialogue/speech/:sessionId/:messageId/:chunkId',
      event,
      params,
    );
  }

  async onAgentSpeech(
    fn: (event: Buffer) => void | Promise<void>,
    params?: {
      appId?: string;
      sessionId?: string;
      messageId?: string;
      chunkId?: string;
    },
  ): Promise<() => void> {
    return this.broker.subscribe<Buffer>(
      'app/:appId/dialogue/speech/:sessionId/:messageId/:chunkId',
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

  async agentPauseSpeech(
    event: SermasSessionDto,
    params?: { appId?: string; sessionId?: string },
  ) {
    return this.broker.publish<SermasSessionDto>(
      'app/:appId/dialogue/pause/:sessionId',
      event,
      params,
    );
  }

  async onAgentPauseSpeech(
    fn: (event: SermasSessionDto) => void | Promise<void>,
    params?: { appId?: string; sessionId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<SermasSessionDto>(
      'app/:appId/dialogue/pause/:sessionId',
      fn,
      params,
    );
  }

  async agentContinueSpeech(
    event: SermasSessionDto,
    params?: { appId?: string; sessionId?: string },
  ) {
    return this.broker.publish<SermasSessionDto>(
      'app/:appId/dialogue/continue/:sessionId',
      event,
      params,
    );
  }

  async onAgentContinueSpeech(
    fn: (event: SermasSessionDto) => void | Promise<void>,
    params?: { appId?: string; sessionId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<SermasSessionDto>(
      'app/:appId/dialogue/continue/:sessionId',
      fn,
      params,
    );
  }

  async userSpeech(
    event: DialogueSpeechToTextDto,
    params?: { appId?: string; sessionId?: string; chunkId?: string },
  ) {
    return this.broker.publish<DialogueSpeechToTextDto>(
      'app/:appId/dialogue/user-speech/:sessionId/:chunkId',
      event,
      params,
    );
  }

  async onUserSpeech(
    fn: (event: DialogueSpeechToTextDto) => void | Promise<void>,
    params?: { appId?: string; sessionId?: string; chunkId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueSpeechToTextDto>(
      'app/:appId/dialogue/user-speech/:sessionId/:chunkId',
      fn,
      params,
    );
  }

  async taskChanged(
    event: DialogueTaskChangedDto,
    params?: { appId?: string; taskId?: string },
  ) {
    return this.broker.publish<DialogueTaskChangedDto>(
      'app/:appId/dialogue/task/changed/:taskId',
      event,
      params,
    );
  }

  async onTaskChanged(
    fn: (event: DialogueTaskChangedDto) => void | Promise<void>,
    params?: { appId?: string; taskId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueTaskChangedDto>(
      'app/:appId/dialogue/task/changed/:taskId',
      fn,
      params,
    );
  }

  async taskProgress(
    event: DialogueTaskProgressDto,
    params?: { appId?: string; taskId?: string },
  ) {
    return this.broker.publish<DialogueTaskProgressDto>(
      'app/:appId/dialogue/task/progress/:taskId',
      event,
      params,
    );
  }

  async onTaskProgress(
    fn: (event: DialogueTaskProgressDto) => void | Promise<void>,
    params?: { appId?: string; taskId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueTaskProgressDto>(
      'app/:appId/dialogue/task/progress/:taskId',
      fn,
      params,
    );
  }

  async recordChanged(
    event: DialogueTaskRecordChangedDto,
    params?: { appId?: string; taskId?: string },
  ) {
    return this.broker.publish<DialogueTaskRecordChangedDto>(
      'app/:appId/dialogue/task/record/:taskId',
      event,
      params,
    );
  }

  async onRecordChanged(
    fn: (event: DialogueTaskRecordChangedDto) => void | Promise<void>,
    params?: { appId?: string; taskId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueTaskRecordChangedDto>(
      'app/:appId/dialogue/task/record/:taskId',
      fn,
      params,
    );
  }

  async fieldHandler(
    event: DialogueTaskRecordHandlerDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<DialogueTaskRecordHandlerDto>(
      'app/:appId/dialogue/task/handler',
      event,
      params,
    );
  }

  async onFieldHandler(
    fn: (event: DialogueTaskRecordHandlerDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueTaskRecordHandlerDto>(
      'app/:appId/dialogue/task/handler',
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

  async toolNotMatching(
    event: DialogueToolNotMatchingEventDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<DialogueToolNotMatchingEventDto>(
      'app/:appId/dialogue/tool/not-matching',
      event,
      params,
    );
  }

  async onToolNotMatching(
    fn: (event: DialogueToolNotMatchingEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<DialogueToolNotMatchingEventDto>(
      'app/:appId/dialogue/tool/not-matching',
      fn,
      params,
    );
  }
}
