import type {
  AccessTokenRequestDto,
  AppClientDto,
  AppModuleConfigDto,
  AppSettingsDto,
  AppToolsDTO,
  CreatePlatformAppDto,
  JwtTokenDto,
  PlatformAppDto,
  PlatformAppExportFilterDto,
  PlatformModuleConfigDto,
  PlatformSettingsDto,
  RefreshTokenRequestDto,
  RepositoryAvatarDto,
  RepositoryConfigDto,
  RepositoryRobotModelDto,
  ViewLogsRequestDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataGetClientAccessToken = {
  requestBody: AccessTokenRequestDto;
};
export type TDataGetClientAccessToken1 = {
  requestBody: AccessTokenRequestDto;
};
export type TDataGetClientRefreshToken = {
  requestBody: RefreshTokenRequestDto;
};
export type TDataGetClientRefreshToken1 = {
  requestBody: RefreshTokenRequestDto;
};
export type TDataCreateApp = {
  requestBody: CreatePlatformAppDto;
};
export type TDataUpdateApp = {
  requestBody: PlatformAppDto;
};
export type TDataUpdateAppTools = {
  appId: string;
  requestBody: Array<AppToolsDTO>;
};
export type TDataUpdateAppSettings = {
  appId: string;
  requestBody: Array<AppSettingsDto>;
};
export type TDataGetAppRepository = {
  appId: string;
};
export type TDataGetAppRepositoryRobots = {
  appId: string;
  name: string;
};
export type TDataGetAppRepositoryAvatars = {
  appId: string;
  name: string;
};
export type TDataGetAppRepositoryBackgrounds = {
  appId: string;
  name: string;
};
export type TDataReadApp = {
  appId: string;
};
export type TDataRemoveApp = {
  appId: string;
};
export type TDataImportApps = {
  importWebsites: string;
  requestBody: Array<PlatformAppDto>;
  skipClients: string;
};
export type TDataExportApps = {
  requestBody: PlatformAppExportFilterDto;
};
export type TDataRemoveApps = {
  requestBody: PlatformAppExportFilterDto;
};
export type TDataCreateClient = {
  appId: string;
  requestBody: AppClientDto;
};
export type TDataReadClient = {
  appId: string;
  clientId: string;
};
export type TDataRemoveClient = {
  appId: string;
  clientId: string;
};
export type TDataListTopics = {
  appId: string;
  clientId: string;
};
export type TDataSaveAppModule = {
  appId: string;
  requestBody: AppModuleConfigDto;
};
export type TDataGetAppModule = {
  appId: string;
  moduleId: string;
};
export type TDataRemoveAppModule = {
  appId: string;
  moduleId: string;
};
export type TDataSavePlatformModule = {
  requestBody: PlatformModuleConfigDto;
};
export type TDataRefreshPlatformModule = {
  moduleId: string;
};
export type TDataGetPlatformModule = {
  moduleId: string;
};
export type TDataRemovePlatformModule = {
  moduleId: string;
};
export type TDataDataLoggerControllerGetLogs = {
  appId: string;
  requestBody: ViewLogsRequestDto;
};

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
   * @returns JwtTokenDto Request an access token for an app
   * @throws ApiError
   */
  public getClientAccessToken(
    data: TDataGetClientAccessToken,
  ): CancelablePromise<JwtTokenDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/platform/token',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns JwtTokenDto Request an access token for an app
   * @throws ApiError
   */
  public getClientAccessToken1(
    data: TDataGetClientAccessToken1,
  ): CancelablePromise<JwtTokenDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/platform/token/access_token',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns JwtTokenDto Request a refresh access token for an app
   * @throws ApiError
   */
  public getClientRefreshToken(
    data: TDataGetClientRefreshToken,
  ): CancelablePromise<JwtTokenDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/platform/token/refresh',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns JwtTokenDto Request a refresh access token for an app
   * @throws ApiError
   */
  public getClientRefreshToken1(
    data: TDataGetClientRefreshToken1,
  ): CancelablePromise<JwtTokenDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/platform/token/refresh_token',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * retrieve app repository defaults
   * @returns RepositoryConfigDto
   * @throws ApiError
   */
  public getRepositoryDefaults(): CancelablePromise<RepositoryConfigDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/repository/defaults',
    });
  }

  /**
   * @returns PlatformAppDto
   * @throws ApiError
   */
  public platformAppControllerListApps(): CancelablePromise<
    Array<PlatformAppDto>
  > {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app',
    });
  }

  /**
   * @returns PlatformAppDto
   * @throws ApiError
   */
  public createApp(data: TDataCreateApp): CancelablePromise<PlatformAppDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns PlatformAppDto
   * @throws ApiError
   */
  public updateApp(data: TDataUpdateApp): CancelablePromise<PlatformAppDto> {
    const { requestBody } = data;
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
   * @returns any
   * @throws ApiError
   */
  public updateAppTools(data: TDataUpdateAppTools): CancelablePromise<any> {
    const { appId, requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/app/{appId}/tools',
      path: {
        appId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public updateAppSettings(
    data: TDataUpdateAppSettings,
  ): CancelablePromise<any> {
    const { appId, requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/app/{appId}/settings',
      path: {
        appId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns RepositoryConfigDto
   * @throws ApiError
   */
  public getAppRepository(
    data: TDataGetAppRepository,
  ): CancelablePromise<RepositoryConfigDto> {
    const { appId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/{appId}/repository',
      path: {
        appId,
      },
    });
  }

  /**
   * @returns RepositoryRobotModelDto
   * @throws ApiError
   */
  public getAppRepositoryRobots(
    data: TDataGetAppRepositoryRobots,
  ): CancelablePromise<RepositoryRobotModelDto> {
    const { appId, name } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/{appId}/repository/robots',
      path: {
        appId,
      },
      query: {
        name,
      },
    });
  }

  /**
   * @returns RepositoryAvatarDto
   * @throws ApiError
   */
  public getAppRepositoryAvatars(
    data: TDataGetAppRepositoryAvatars,
  ): CancelablePromise<RepositoryAvatarDto> {
    const { appId, name } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/{appId}/repository/avatars',
      path: {
        appId,
      },
      query: {
        name,
      },
    });
  }

  /**
   * @returns RepositoryConfigDto
   * @throws ApiError
   */
  public getAppRepositoryBackgrounds(
    data: TDataGetAppRepositoryBackgrounds,
  ): CancelablePromise<RepositoryConfigDto> {
    const { appId, name } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/{appId}/repository/backgrounds',
      path: {
        appId,
      },
      query: {
        name,
      },
    });
  }

  /**
   * @returns PlatformAppDto
   * @throws ApiError
   */
  public readApp(data: TDataReadApp): CancelablePromise<PlatformAppDto> {
    const { appId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/app/{appId}',
      path: {
        appId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public removeApp(data: TDataRemoveApp): CancelablePromise<any> {
    const { appId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/app/{appId}',
      path: {
        appId,
      },
    });
  }

  /**
   * Batch import of applications
   * @returns PlatformAppDto
   * @throws ApiError
   */
  public importApps(
    data: TDataImportApps,
  ): CancelablePromise<Array<PlatformAppDto>> {
    const { importWebsites, requestBody, skipClients } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/admin/import',
      query: {
        skipClients,
        importWebsites,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Batch export applications
   * @returns PlatformAppDto
   * @throws ApiError
   */
  public exportApps(
    data: TDataExportApps,
  ): CancelablePromise<Array<PlatformAppDto>> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/admin/export',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Remove applications
   * @returns any
   * @throws ApiError
   */
  public removeApps(data: TDataRemoveApps): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/app/admin/remove',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns AppClientDto
   * @throws ApiError
   */
  public createClient(
    data: TDataCreateClient,
  ): CancelablePromise<AppClientDto> {
    const { appId, requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/platform/app/{appId}/client',
      path: {
        appId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns AppClientDto
   * @throws ApiError
   */
  public readClient(data: TDataReadClient): CancelablePromise<AppClientDto> {
    const { appId, clientId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/platform/app/{appId}/client/{clientId}',
      path: {
        appId,
        clientId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public removeClient(data: TDataRemoveClient): CancelablePromise<any> {
    const { appId, clientId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/platform/app/{appId}/client/{clientId}',
      path: {
        clientId,
        appId,
      },
    });
  }

  /**
   * @returns string
   * @throws ApiError
   */
  public listTopics(data: TDataListTopics): CancelablePromise<Array<string>> {
    const { appId, clientId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/platform/app/{appId}/client/{clientId}/topics',
      path: {
        appId,
        clientId,
      },
    });
  }

  /**
   * Create or update an app module
   * @returns any
   * @throws ApiError
   */
  public saveAppModule(data: TDataSaveAppModule): CancelablePromise<any> {
    const { appId, requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/platform/app/{appId}/module',
      path: {
        appId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Retrieve an app module
   * @returns any
   * @throws ApiError
   */
  public getAppModule(data: TDataGetAppModule): CancelablePromise<any> {
    const { appId, moduleId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/platform/app/{appId}/module/{moduleId}',
      path: {
        appId,
        moduleId,
      },
    });
  }

  /**
   * Remove an app module
   * @returns any
   * @throws ApiError
   */
  public removeAppModule(data: TDataRemoveAppModule): CancelablePromise<any> {
    const { appId, moduleId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/platform/app/{appId}/module/{moduleId}',
      path: {
        appId,
        moduleId,
      },
    });
  }

  /**
   * Create or update an app module
   * @returns any
   * @throws ApiError
   */
  public savePlatformModule(
    data: TDataSavePlatformModule,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/platform/module',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * reload app module specs
   * @returns any
   * @throws ApiError
   */
  public refreshPlatformModule(
    data: TDataRefreshPlatformModule,
  ): CancelablePromise<any> {
    const { moduleId } = data;
    return this.httpRequest.request({
      method: 'HEAD',
      url: '/api/platform/module/{moduleId}',
      path: {
        moduleId,
      },
    });
  }

  /**
   * Retrieve an app module
   * @returns any
   * @throws ApiError
   */
  public getPlatformModule(
    data: TDataGetPlatformModule,
  ): CancelablePromise<any> {
    const { moduleId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/platform/module/{moduleId}',
      path: {
        moduleId,
      },
    });
  }

  /**
   * Remove an app module
   * @returns any
   * @throws ApiError
   */
  public removePlatformModule(
    data: TDataRemovePlatformModule,
  ): CancelablePromise<any> {
    const { moduleId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/platform/module/{moduleId}',
      path: {
        moduleId,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public dataLoggerControllerGetLogs(
    data: TDataDataLoggerControllerGetLogs,
  ): CancelablePromise<any> {
    const { appId, requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/datalogger/get/{appId}',
      path: {
        appId,
      },
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
