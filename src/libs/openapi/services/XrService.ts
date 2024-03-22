/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { XRMarkerDto } from '../models/XRMarkerDto';
import type { XRMarkerListRequestDto } from '../models/XRMarkerListRequestDto';
import type { XROcclusionResponseDto } from '../models/XROcclusionResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class XrService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * List available markers
     * @param requestBody
     * @returns XRMarkerDto Marker created or updated
     * @throws ApiError
     */
    public xrMarkerControllerSearchMarker(
        requestBody: XRMarkerListRequestDto,
    ): CancelablePromise<Array<XRMarkerDto>> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/api/xr/marker/search',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Save a marker
     * @param requestBody
     * @returns XRMarkerDto Marker saved
     * @throws ApiError
     */
    public xrMarkerControllerSaveMarker(
        requestBody: XRMarkerDto,
    ): CancelablePromise<XRMarkerDto> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/xr/marker',
            body: requestBody,
            mediaType: 'application/json',
        });
    }
    /**
     * Delete a marker
     * @param markerId
     * @returns XRMarkerDto Marker deleted
     * @throws ApiError
     */
    public xrMarkerControllerDeleteMarker(
        markerId: string,
    ): CancelablePromise<XRMarkerDto> {
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
     * @param markerId
     * @returns binary Marker retrieved
     * @throws ApiError
     */
    public xrMarkerControllerGetMarkerQrCode(
        markerId: string,
    ): CancelablePromise<Blob> {
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
