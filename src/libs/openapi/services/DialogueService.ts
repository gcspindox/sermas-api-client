import type {
  DialogueActor,
  DialogueDocumentDto,
  DialogueMemoryMessageDto,
  DialogueMessageDto,
  DialogueTextToSpeechDto,
  DialogueToolsRepositoryDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataSave = {
  requestBody: DialogueDocumentDto;
};
export type TDataImport = {
  /**
   * Documents list
   */
  requestBody: Array<DialogueDocumentDto>;
};
export type TDataRemove = {
  appId: string;
  documentId: Array<string>;
};
export type TDataSpeak = {
  requestBody: DialogueTextToSpeechDto;
};
export type TDataText = {
  appId: string;
  formData: {
    appId?: string;
    /**
     * Reference to the authenticated client the request originated from
     */
    clientId?: string;
    /**
     * Reference to the user interacting with the system
     */
    userId?: string;
    /**
     * Reference date
     */
    ts?: string;
    /**
     * User session identifier
     */
    sessionId?: string;
    actor?: DialogueActor;
    /**
     * Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.
     */
    text?: string;
    /**
     * Assistant gender (M or F)
     */
    gender?: string;
    /**
     * Text language
     */
    language?: string;
    /**
     * User emotion, if available
     */
    emotion?: string;
    /**
     * LLM engine to use
     */
    llm?: string;
    /**
     * The avatar id used for interaction
     */
    avatar?: string;
    /**
     * Unique sortable ID used to group and sort messages
     */
    messageId?: string;
    /**
     * Unique sortable ID used to sort chunks from the same messageId
     */
    chunkId?: string;
    file?: Blob | File;
  };
  sampleRate: number;
  sessionId: string;
};
export type TDataChatMessage = {
  appId: string;
  requestBody: DialogueMessageDto;
  sessionId: string;
};
export type TDataStopAgentSpeech = {
  appId: string;
  sessionId: string;
};
export type TDataGetChatHistory = {
  sessionId: string;
};
export type TDataSetTools = {
  repositoryId: string;
  requestBody: DialogueToolsRepositoryDto;
};
export type TDataAddTools = {
  repositoryId: string;
  requestBody: DialogueToolsRepositoryDto;
};
export type TDataRemoveRepository = {
  repositoryId: string;
};

export class DialogueService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns DialogueDocumentDto Saved document
   * @throws ApiError
   */
  public save(data: TDataSave): CancelablePromise<DialogueDocumentDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/dialogue/document',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Import RAG documents
   * @returns DialogueDocumentDto
   * @throws ApiError
   */
  public import(
    data: TDataImport,
  ): CancelablePromise<Array<DialogueDocumentDto>> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/document',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove RAG documents
   * @returns any
   * @throws ApiError
   */
  public remove(data: TDataRemove): CancelablePromise<any> {
    const { appId, documentId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/dialogue/document/{appId}',
      path: {
        appId,
      },
      query: {
        documentId,
      },
    });
  }

  /**
   * Converts a text to voice as mp3
   * @returns any
   * @throws ApiError
   */
  public speak(data: TDataSpeak): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/speech/tts',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public text(data: TDataText): CancelablePromise<any> {
    const { appId, formData, sampleRate, sessionId } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/speech/stt/{appId}/{sessionId}',
      path: {
        appId,
        sessionId,
      },
      query: {
        sampleRate,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public chatMessage(data: TDataChatMessage): CancelablePromise<any> {
    const { appId, requestBody, sessionId } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/speech/chat/{appId}/{sessionId}',
      path: {
        appId,
        sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public stopAgentSpeech(data: TDataStopAgentSpeech): CancelablePromise<any> {
    const { appId, sessionId } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/speech/stop/{appId}/{sessionId}',
      path: {
        appId,
        sessionId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public listModels(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/dialogue/speech/models',
    });
  }

  /**
   * Get a session chat history
   * @returns DialogueMemoryMessageDto
   * @throws ApiError
   */
  public getChatHistory(
    data: TDataGetChatHistory,
  ): CancelablePromise<Array<DialogueMemoryMessageDto>> {
    const { sessionId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/dialogue/memory/{sessionId}',
      path: {
        sessionId,
      },
    });
  }

  /**
   * Save tools, overwriting existing ones.
   * @returns any
   * @throws ApiError
   */
  public setTools(data: TDataSetTools): CancelablePromise<any> {
    const { repositoryId, requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/tools/{repositoryId}',
      path: {
        repositoryId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Add tools to the session. Existing with the same name will be overridden.
   * @returns any
   * @throws ApiError
   */
  public addTools(data: TDataAddTools): CancelablePromise<any> {
    const { repositoryId, requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/dialogue/tools/{repositoryId}',
      path: {
        repositoryId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove a set of tools
   * @returns any
   * @throws ApiError
   */
  public removeRepository(data: TDataRemoveRepository): CancelablePromise<any> {
    const { repositoryId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/dialogue/tools/{repositoryId}',
      path: {
        repositoryId,
      },
    });
  }
}
