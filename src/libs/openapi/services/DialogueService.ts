import type {
  DialogueActor,
  DialogueDocumentDto,
  DialogueMessageDto,
  DialogueTextToSpeechDto,
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
     * User session identifier
     */
    sessionId?: string;
    /**
     * Unique identifier of the message
     */
    messageId?: string;
    /**
     * Actor providing the text, can be user or agent
     */
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
     * Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.
     */
    chunkId?: number;
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
export type TDataGetToolsfFromAppId = {
  appId: string;
  requestBody: Array<string>;
  sessionId: string;
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
  public import1(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/admin/document',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public getToolsfFromAppId(
    data: TDataGetToolsfFromAppId,
  ): CancelablePromise<any> {
    const { appId, requestBody, sessionId } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/dialogue/tools/{appId}/{sessionId}',
      path: {
        appId,
        sessionId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
