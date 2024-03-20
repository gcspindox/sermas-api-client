/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AgentHeartBeatEventDto } from '../models/AgentHeartBeatEventDto';
import type { SessionDto } from '../models/SessionDto';
import type { SessionStorageRecordDto } from '../models/SessionStorageRecordDto';
import type { SessionStorageSearchDto } from '../models/SessionStorageSearchDto';
import type { SessionSupportRequestDto } from '../models/SessionSupportRequestDto';
import type { SessionSupportResponseDto } from '../models/SessionSupportResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class SessionService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Load current user session
     * @param appId
     * @returns any
     * @throws ApiError
     */
    public getUserSession(
        appId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/session/user/{appId}',
            path: {
                'appId': appId,
            },
        });
    }
    /**
     * Load a session
     * @param sessionId
     * @returns any
     * @throws ApiError
     */
    public readSession(
        sessionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/session/{sessionId}',
            path: {
                'sessionId': sessionId,
            },
        });
    }
    /**
     * Remove session
     * @param sessionId
     * @returns any
     * @throws ApiError
     */
    public deleteSession(
        sessionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/session/{sessionId}',
            path: {
                'sessionId': sessionId,
            },
        });
    }
    /**
     * Create session
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public createSession(
        requestBody: SessionDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Update session
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public updateSession(
        requestBody: SessionDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/session',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Notifies of an agent update
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public agentUpdate(
        requestBody: AgentHeartBeatEventDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/session/agent',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Request support from human
     * @param requestBody
     * @returns SessionSupportResponseDto Human support requested
     * @throws ApiError
     */
    public support(
        requestBody: SessionSupportRequestDto,
    ): CancelablePromise<SessionSupportResponseDto> {
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
     * @param requestBody
     * @returns SessionStorageRecordDto Record stored
     * @throws ApiError
     */
    public setRecord(
        requestBody: SessionStorageRecordDto,
    ): CancelablePromise<SessionStorageRecordDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/session/storage',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Store user data
     * @param requestBody
     * @returns SessionStorageRecordDto Record stored
     * @throws ApiError
     */
    public findRecords(
        requestBody: SessionStorageSearchDto,
    ): CancelablePromise<Array<SessionStorageRecordDto>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/session/storage/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve stored data
     * @param storageId
     * @returns SessionStorageRecordDto Record retrieved
     * @throws ApiError
     */
    public getRecord(
        storageId: string,
    ): CancelablePromise<SessionStorageRecordDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/session/storage/{storageId}',
            path: {
                'storageId': storageId,
            },
        });
    }
    /**
     * Delete a record
     * @param storageId
     * @returns any Record deleted
     * @throws ApiError
     */
    public deleteRecord(
        storageId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/session/storage/{storageId}',
            path: {
                'storageId': storageId,
            },
        });
    }
}
