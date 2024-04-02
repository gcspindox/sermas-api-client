import type {
  Buffer,
  RepositoryAssetMetadataDto,
  UIContentDto,
  UIInteractionDTO,
  UIModelMapBlendShapesRequestDto,
  UIModelMapBlendShapesResponseDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataNotifyInteraction = {
  appId: string;
  moduleId: string;
  requestBody: UIInteractionDTO;
};
export type TDataShowContent = {
  requestBody: UIContentDto;
};
export type TDataUiModelControllerMapBlendShapes = {
  requestBody: UIModelMapBlendShapesRequestDto;
};
export type TDataGetAsset = {
  appId: string;
  assetId: string;
  type: string;
};
export type TDataSaveAsset = {
  formData: {
    id?: string;
    type?: 'avatars' | 'backgrounds' | 'robots' | 'documents' | 'animations';
    name?: string;
    path?: string;
    metadata?: RepositoryAssetMetadataDto;
    filename?: string;
    appId?: string;
    userId?: string;
    ts?: string;
    file?: Blob | File;
  };
};
export type TDataAdminSaveAsset = {
  formData: {
    id?: string;
    type?: 'avatars' | 'backgrounds' | 'robots' | 'documents' | 'animations';
    name?: string;
    path?: string;
    metadata?: RepositoryAssetMetadataDto;
    filename?: string;
    appId?: string;
    userId?: string;
    ts?: string;
    file?: Blob | File;
  };
};

export class UiService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Trigger a UI interaction
   * @returns any
   * @throws ApiError
   */
  public notifyInteraction(
    data: TDataNotifyInteraction,
  ): CancelablePromise<any> {
    const { appId, moduleId, requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/ui/interaction/{appId}/{moduleId}',
      path: {
        appId,
        moduleId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `unauthorized`,
      },
    });
  }

  /**
   * Show content
   * @returns UIContentDto Content to show
   * @throws ApiError
   */
  public showContent(data: TDataShowContent): CancelablePromise<UIContentDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/ui/content/{appId}',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `unauthorized`,
      },
    });
  }

  /**
   * Tries to map model blend shapes by name similarity
   * @returns UIModelMapBlendShapesResponseDto Map model blend shapes
   * @throws ApiError
   */
  public uiModelControllerMapBlendShapes(
    data: TDataUiModelControllerMapBlendShapes,
  ): CancelablePromise<UIModelMapBlendShapesResponseDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/model/map-blend-shapes',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `unauthorized`,
      },
    });
  }

  /**
   * Retrieve an asset
   * @returns Buffer Asset content
   * @throws ApiError
   */
  public getAsset(data: TDataGetAsset): CancelablePromise<Buffer> {
    const { appId, assetId, type } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/ui/asset/{appId}/{type}/{assetId}',
      path: {
        appId,
        type,
        assetId,
      },
    });
  }

  /**
   * Retrieve an asset
   * @returns any
   * @throws ApiError
   */
  public saveAsset(data: TDataSaveAsset): CancelablePromise<any> {
    const { formData } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/asset',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public adminSaveAsset(data: TDataAdminSaveAsset): CancelablePromise<any> {
    const { formData } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/admin/asset',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }
}
