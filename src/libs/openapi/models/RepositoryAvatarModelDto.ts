/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvatarCameraConfig } from './AvatarCameraConfig';
export type RepositoryAvatarModelDto = {
    modelType: 'readyplayerme' | 'custom';
    name?: string;
    modelPath: string;
    gender: 'M' | 'F';
    camera?: AvatarCameraConfig;
    cameraMobile?: AvatarCameraConfig;
};

