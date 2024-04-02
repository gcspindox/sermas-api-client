import type {
  Buffer,
  UIAssetMetadataDto,
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
  path: string;
};
export type TDataSaveModel = {
  formData: {
    filename?: string;
    appId?: string;
    type?: 'models' | 'backgrounds' | 'animations' | 'documents';
    userId?: string;
    ts?: string;
    metadata?: UIAssetMetadataDto;
    file?: Blob | File;
  };
};
export type TDataSaveBackground = {
  formData: {
    filename?: string;
    appId?: string;
    type?: 'models' | 'backgrounds' | 'animations' | 'documents';
    userId?: string;
    ts?: string;
    metadata?: UIAssetMetadataDto;
    file?: Blob | File;
  };
};
export type TDataSaveDocuments = {
  formData: {
    filename?: string;
    appId?: string;
    type?: 'models' | 'backgrounds' | 'animations' | 'documents';
    userId?: string;
    ts?: string;
    metadata?: UIAssetMetadataDto;
    file?: Blob | File;
  };
};
export type TDataSaveAsset = {
  formData: {
    filename?: string;
    appId?: string;
    type?: 'models' | 'backgrounds' | 'animations' | 'documents';
    userId?: string;
    ts?: string;
    metadata?: UIAssetMetadataDto;
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
   * @returns Buffer Download an asset by url
   * @throws ApiError
   */
  public getAsset(data: TDataGetAsset): CancelablePromise<Buffer> {
    const { appId, path } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/ui/asset/{appId}',
      path: {
        appId,
      },
      query: {
        path,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public saveModel(data: TDataSaveModel): CancelablePromise<any> {
    const { formData } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/asset/models',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public saveBackground(data: TDataSaveBackground): CancelablePromise<any> {
    const { formData } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/asset/backgrounds',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public saveDocuments(data: TDataSaveDocuments): CancelablePromise<any> {
    const { formData } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/asset/documents',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public saveAsset(data: TDataSaveAsset): CancelablePromise<any> {
    const { formData } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/ui/admin/asset',
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }
}
