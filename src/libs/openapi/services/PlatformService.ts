/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AccessTokenRequestDto } from '../models/AccessTokenRequestDto';
import type { AppClientDto } from '../models/AppClientDto';
import type { AppModuleConfigDto } from '../models/AppModuleConfigDto';
import type { AppSettingsDto } from '../models/AppSettingsDto';
import type { AppToolsDTO } from '../models/AppToolsDTO';
import type { CreatePlatformAppDto } from '../models/CreatePlatformAppDto';
import type { JwtTokenDto } from '../models/JwtTokenDto';
import type { PlatformAppDto } from '../models/PlatformAppDto';
import type { PlatformAppExportFilterDto } from '../models/PlatformAppExportFilterDto';
import type { PlatformModuleConfigDto } from '../models/PlatformModuleConfigDto';
import type { PlatformSettingsDto } from '../models/PlatformSettingsDto';
import type { RefreshTokenRequestDto } from '../models/RefreshTokenRequestDto';
import type { RepositoryAvatarModelDto } from '../models/RepositoryAvatarModelDto';
import type { RepositoryConfigDto } from '../models/RepositoryConfigDto';
import type { RepositoryRobotModelDto } from '../models/RepositoryRobotModelDto';
import type { ViewLogsRequestDto } from '../models/ViewLogsRequestDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class PlatformService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * @returns PlatformSettingsDto
     * @throws ApiError
     */
    public getUserSettings(): CancelablePromise<PlatformSettingsDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/platorm/topics/user',
        });
    }
    /**
     * @returns PlatformSettingsDto
     * @throws ApiError
     */
    public getSettings(): CancelablePromise<PlatformSettingsDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/platorm/topics',
        });
    }
    /**
     * @param requestBody
     * @returns JwtTokenDto Request an access token for an app
     * @throws ApiError
     */
    public getClientAccessToken(
        requestBody: AccessTokenRequestDto,
    ): CancelablePromise<JwtTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/platform/token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns JwtTokenDto Request an access token for an app
     * @throws ApiError
     */
    public getClientAccessToken1(
        requestBody: AccessTokenRequestDto,
    ): CancelablePromise<JwtTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/platform/token/access_token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns JwtTokenDto Request a refresh access token for an app
     * @throws ApiError
     */
    public getClientRefreshToken(
        requestBody: RefreshTokenRequestDto,
    ): CancelablePromise<JwtTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/platform/token/refresh',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns JwtTokenDto Request a refresh access token for an app
     * @throws ApiError
     */
    public getClientRefreshToken1(
        requestBody: RefreshTokenRequestDto,
    ): CancelablePromise<JwtTokenDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/platform/token/refresh_token',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns PlatformAppDto
     * @throws ApiError
     */
    public platformAppControllerListApps(): CancelablePromise<Array<PlatformAppDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/app',
        });
    }
    /**
     * @param requestBody
     * @returns PlatformAppDto
     * @throws ApiError
     */
    public createApp(
        requestBody: CreatePlatformAppDto,
    ): CancelablePromise<PlatformAppDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/app',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param requestBody
     * @returns PlatformAppDto
     * @throws ApiError
     */
    public updateApp(
        requestBody: PlatformAppDto,
    ): CancelablePromise<PlatformAppDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/app',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @returns PlatformAppDto
     * @throws ApiError
     */
    public listUserApps(): CancelablePromise<Array<PlatformAppDto>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/app/list',
        });
    }
    /**
     * @param appId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public updateAppTools(
        appId: string,
        requestBody: Array<AppToolsDTO>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/app/{appId}/tools',
            path: {
                'appId': appId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param appId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public updateAppSettings(
        appId: string,
        requestBody: Array<AppSettingsDto>,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/app/{appId}/settings',
            path: {
                'appId': appId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param appId
     * @returns RepositoryConfigDto
     * @throws ApiError
     */
    public getAppRepository(
        appId: string,
    ): CancelablePromise<RepositoryConfigDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/app/{appId}/repository',
            path: {
                'appId': appId,
            },
        });
    }
    /**
     * @param appId
     * @param name
     * @returns RepositoryRobotModelDto
     * @throws ApiError
     */
    public getAppRepositoryRobots(
        appId: string,
        name: string,
    ): CancelablePromise<RepositoryRobotModelDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/app/{appId}/repository/robots',
            path: {
                'appId': appId,
            },
            query: {
                'name': name,
            },
        });
    }
    /**
     * @param appId
     * @param name
     * @returns RepositoryAvatarModelDto
     * @throws ApiError
     */
    public getAppRepositoryAvatars(
        appId: string,
        name: string,
    ): CancelablePromise<RepositoryAvatarModelDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/app/{appId}/repository/avatars',
            path: {
                'appId': appId,
            },
            query: {
                'name': name,
            },
        });
    }
    /**
     * @param appId
     * @param name
     * @returns RepositoryConfigDto
     * @throws ApiError
     */
    public getAppRepositoryBackgrounds(
        appId: string,
        name: string,
    ): CancelablePromise<RepositoryConfigDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/app/{appId}/repository/backgrounds',
            path: {
                'appId': appId,
            },
            query: {
                'name': name,
            },
        });
    }
    /**
     * @param appId
     * @returns PlatformAppDto
     * @throws ApiError
     */
    public readApp(
        appId: string,
    ): CancelablePromise<PlatformAppDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/app/{appId}',
            path: {
                'appId': appId,
            },
        });
    }
    /**
     * @param appId
     * @returns any
     * @throws ApiError
     */
    public removeApp(
        appId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/app/{appId}',
            path: {
                'appId': appId,
            },
        });
    }
    /**
     * Batch import of applications
     * @param skipClients
     * @param requestBody
     * @returns PlatformAppDto
     * @throws ApiError
     */
    public importApps(
        skipClients: string,
        requestBody: Array<PlatformAppDto>,
    ): CancelablePromise<Array<PlatformAppDto>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/app/admin/import',
            query: {
                'skipClients': skipClients,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Batch export applications
     * @param requestBody
     * @returns PlatformAppDto
     * @throws ApiError
     */
    public exportApps(
        requestBody: PlatformAppExportFilterDto,
    ): CancelablePromise<Array<PlatformAppDto>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/app/admin/export',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Remove applications
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public removeApps(
        requestBody: PlatformAppExportFilterDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/app/admin/remove',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param appId
     * @param requestBody
     * @returns AppClientDto
     * @throws ApiError
     */
    public createClient(
        appId: string,
        requestBody: AppClientDto,
    ): CancelablePromise<AppClientDto> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/platform/app/{appId}/client',
            path: {
                'appId': appId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * @param appId
     * @param clientId
     * @returns AppClientDto
     * @throws ApiError
     */
    public readClient(
        appId: string,
        clientId: string,
    ): CancelablePromise<AppClientDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/platform/app/{appId}/client/{clientId}',
            path: {
                'appId': appId,
                'clientId': clientId,
            },
        });
    }
    /**
     * @param clientId
     * @param appId
     * @returns any
     * @throws ApiError
     */
    public removeClient(
        clientId: string,
        appId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/platform/app/{appId}/client/{clientId}',
            path: {
                'clientId': clientId,
                'appId': appId,
            },
        });
    }
    /**
     * @param appId
     * @param clientId
     * @returns string
     * @throws ApiError
     */
    public listTopics(
        appId: string,
        clientId: string,
    ): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/platform/app/{appId}/client/{clientId}/topics',
            path: {
                'appId': appId,
                'clientId': clientId,
            },
        });
    }
    /**
     * Create or update an app module
     * @param appId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public saveAppModule(
        appId: string,
        requestBody: AppModuleConfigDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/platform/app/{appId}/module',
            path: {
                'appId': appId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Retrieve an app module
     * @param appId
     * @param moduleId
     * @returns any
     * @throws ApiError
     */
    public getAppModule(
        appId: string,
        moduleId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/platform/app/{appId}/module/{moduleId}',
            path: {
                'appId': appId,
                'moduleId': moduleId,
            },
        });
    }
    /**
     * Remove an app module
     * @param appId
     * @param moduleId
     * @returns any
     * @throws ApiError
     */
    public removeAppModule(
        appId: string,
        moduleId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/platform/app/{appId}/module/{moduleId}',
            path: {
                'appId': appId,
                'moduleId': moduleId,
            },
        });
    }
    /**
     * Create or update an app module
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public savePlatformModule(
        requestBody: PlatformModuleConfigDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/platform/module',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * reload app module specs
     * @param moduleId
     * @returns any
     * @throws ApiError
     */
    public refreshPlatformModule(
        moduleId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'HEAD',
            url: '/api/platform/module/{moduleId}',
            path: {
                'moduleId': moduleId,
            },
        });
    }
    /**
     * Retrieve an app module
     * @param moduleId
     * @returns any
     * @throws ApiError
     */
    public getPlatformModule(
        moduleId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/platform/module/{moduleId}',
            path: {
                'moduleId': moduleId,
            },
        });
    }
    /**
     * Remove an app module
     * @param moduleId
     * @returns any
     * @throws ApiError
     */
    public removePlatformModule(
        moduleId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/api/platform/module/{moduleId}',
            path: {
                'moduleId': moduleId,
            },
        });
    }
    /**
     * @param appId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public dataLoggerControllerGetLogs(
        appId: string,
        requestBody: ViewLogsRequestDto,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/datalogger/get/{appId}',
            path: {
                'appId': appId,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
