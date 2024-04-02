import type {
  AgentHeartBeatEventDto,
  SessionDto,
  SessionStorageRecordDto,
  SessionStorageSearchDto,
  SessionSupportRequestDto,
  SessionSupportResponseDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataGetUserSession = {
  appId: string;
};
export type TDataReadSession = {
  sessionId: string;
};
export type TDataDeleteSession = {
  sessionId: string;
};
export type TDataCreateSession = {
  requestBody: SessionDto;
};
export type TDataUpdateSession = {
  requestBody: SessionDto;
};
export type TDataAgentUpdate = {
  requestBody: AgentHeartBeatEventDto;
};
export type TDataSupport = {
  requestBody: SessionSupportRequestDto;
};
export type TDataSetRecord = {
  requestBody: SessionStorageRecordDto;
};
export type TDataFindRecords = {
  requestBody: SessionStorageSearchDto;
};
export type TDataGetRecord = {
  storageId: string;
};
export type TDataDeleteRecord = {
  storageId: string;
};

export class SessionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Load current user session
   * @returns any
   * @throws ApiError
   */
  public getUserSession(data: TDataGetUserSession): CancelablePromise<any> {
    const { appId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/session/user/{appId}',
      path: {
        appId,
      },
    });
  }

  /**
   * Load a session
   * @returns any
   * @throws ApiError
   */
  public readSession(data: TDataReadSession): CancelablePromise<any> {
    const { sessionId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/session/{sessionId}',
      path: {
        sessionId,
      },
    });
  }

  /**
   * Remove session
   * @returns any
   * @throws ApiError
   */
  public deleteSession(data: TDataDeleteSession): CancelablePromise<any> {
    const { sessionId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/session/{sessionId}',
      path: {
        sessionId,
      },
    });
  }

  /**
   * Create session
   * @returns any
   * @throws ApiError
   */
  public createSession(data: TDataCreateSession): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/session',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Update session
   * @returns any
   * @throws ApiError
   */
  public updateSession(data: TDataUpdateSession): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/session',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Notifies of an agent update
   * @returns any
   * @throws ApiError
   */
  public agentUpdate(data: TDataAgentUpdate): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/session/agent',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Request support from human
   * @returns SessionSupportResponseDto Human support requested
   * @throws ApiError
   */
  public support(
    data: TDataSupport,
  ): CancelablePromise<SessionSupportResponseDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/session/support',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `unauthorized`,
      },
    });
  }

  /**
   * Store user data
   * @returns SessionStorageRecordDto Record stored
   * @throws ApiError
   */
  public setRecord(
    data: TDataSetRecord,
  ): CancelablePromise<SessionStorageRecordDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/session/storage',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Store user data
   * @returns SessionStorageRecordDto Record stored
   * @throws ApiError
   */
  public findRecords(
    data: TDataFindRecords,
  ): CancelablePromise<Array<SessionStorageRecordDto>> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/session/storage/search',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Retrieve stored data
   * @returns SessionStorageRecordDto Record retrieved
   * @throws ApiError
   */
  public getRecord(
    data: TDataGetRecord,
  ): CancelablePromise<SessionStorageRecordDto> {
    const { storageId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/session/storage/{storageId}',
      path: {
        storageId,
      },
    });
  }

  /**
   * Delete a record
   * @returns any Record deleted
   * @throws ApiError
   */
  public deleteRecord(data: TDataDeleteRecord): CancelablePromise<any> {
    const { storageId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/session/storage/{storageId}',
      path: {
        storageId,
      },
    });
  }
}
