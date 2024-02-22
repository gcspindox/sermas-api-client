/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UIContentDto } from '../models/UIContentDto';
import type { UIInteractionDTO } from '../models/UIInteractionDTO';
import type { UIModelMapBlendShapesRequestDto } from '../models/UIModelMapBlendShapesRequestDto';
import type { UIModelMapBlendShapesResponseDto } from '../models/UIModelMapBlendShapesResponseDto';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class UiService {
    constructor(public readonly httpRequest: BaseHttpRequest) {}
    /**
     * Trigger a UI interaction
     * @param appId
     * @param moduleId
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public notifyInteraction(
        appId: string,
        moduleId: string,
        requestBody: UIInteractionDTO,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/api/ui/interaction/{appId}/{moduleId}',
            path: {
                'appId': appId,
                'moduleId': moduleId,
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
     * @param requestBody
     * @returns UIContentDto Content to show
     * @throws ApiError
     */
    public showContent(
        requestBody: UIContentDto,
    ): CancelablePromise<UIContentDto> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/api/ui/asset/{appId}',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                401: `unauthorized`,
            },
        });
    }
    /**
     * Tries to map model blend shapes by name similarity
     * @param requestBody
     * @returns UIModelMapBlendShapesResponseDto Map model blend shapes
     * @throws ApiError
     */
    public uiModelControllerMapBlendShapes(
        requestBody: UIModelMapBlendShapesRequestDto,
    ): CancelablePromise<UIModelMapBlendShapesResponseDto> {
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
}
