import type {
  ObjectDetectionRequest,
  SentimentAnalysisRequest,
  UserInteractionIntentionDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataObjecTdEtection = {
  requestBody: ObjectDetectionRequest;
};
export type TDataDetectionControllerSentimentAnalysis = {
  requestBody: SentimentAnalysisRequest;
};
export type TDataDetectionControllerInteractionIntention = {
  requestBody: UserInteractionIntentionDto;
};
export type TDataDetectionControllerSendFrame = {
  appId: string;
  cameraId: string;
  formData: {
    file?: Blob | File;
  };
};
export type TDataDetectionControllerServe = {
  appId: string;
  cameraId: string;
  overlay: string;
};

export class DetectionService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns any
   * @throws ApiError
   */
  public objecTdEtection(data: TDataObjecTdEtection): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/detection/object-detection',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public detectionControllerSentimentAnalysis(
    data: TDataDetectionControllerSentimentAnalysis,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/detection/sentiment-analysis',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public detectionControllerInteractionIntention(
    data: TDataDetectionControllerInteractionIntention,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/detection/interaction',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public detectionControllerSendFrame(
    data: TDataDetectionControllerSendFrame,
  ): CancelablePromise<any> {
    const { appId, cameraId, formData } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/detection/{appId}/{cameraId}/frame',
      path: {
        appId,
        cameraId,
      },
      formData: formData,
      mediaType: 'multipart/form-data',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public detectionControllerServe(
    data: TDataDetectionControllerServe,
  ): CancelablePromise<any> {
    const { appId, cameraId, overlay } = data;
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/detection/{appId}/{cameraId}/camera',
      path: {
        appId,
        cameraId,
      },
      query: {
        overlay,
      },
    });
  }
}
