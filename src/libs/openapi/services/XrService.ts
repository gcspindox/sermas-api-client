import type {
  XRMarkerDto,
  XRMarkerListRequestDto,
  XROcclusionResponseDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataXrMarkerControllerSearchMarker = {
  requestBody: XRMarkerListRequestDto;
};
export type TDataXrMarkerControllerSaveMarker = {
  requestBody: XRMarkerDto;
};
export type TDataXrMarkerControllerDeleteMarker = {
  markerId: string;
};
export type TDataXrMarkerControllerGetMarkerQrCode = {
  markerId: string;
};

export class XrService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * List available markers
   * @returns XRMarkerDto Marker created or updated
   * @throws ApiError
   */
  public xrMarkerControllerSearchMarker(
    data: TDataXrMarkerControllerSearchMarker,
  ): CancelablePromise<Array<XRMarkerDto>> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/xr/marker/search',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Save a marker
   * @returns XRMarkerDto Marker saved
   * @throws ApiError
   */
  public xrMarkerControllerSaveMarker(
    data: TDataXrMarkerControllerSaveMarker,
  ): CancelablePromise<XRMarkerDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/xr/marker',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Delete a marker
   * @returns XRMarkerDto Marker deleted
   * @throws ApiError
   */
  public xrMarkerControllerDeleteMarker(
    data: TDataXrMarkerControllerDeleteMarker,
  ): CancelablePromise<XRMarkerDto> {
    const { markerId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/xr/marker/{markerId}',
      path: {
        ':markerId': markerId,
      },
    });
  }

  /**
   * Get the marker QR code as image (jpeg)
   * @returns binary Marker retrieved
   * @throws ApiError
   */
  public xrMarkerControllerGetMarkerQrCode(
    data: TDataXrMarkerControllerGetMarkerQrCode,
  ): CancelablePromise<Blob | File> {
    const { markerId } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/xr/marker/{markerId}',
      path: {
        ':markerId': markerId,
      },
    });
  }

  /**
   * Indicate if a 3D asset model is occluded by a physical obstacle.
   * @returns XROcclusionResponseDto Got information about 3D model
   * @throws ApiError
   */
  public xrOcclusionControllerOcclusion(): CancelablePromise<XROcclusionResponseDto> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/xr/occlusion',
      errors: {
        401: `Unauthorized`,
      },
    });
  }
}
