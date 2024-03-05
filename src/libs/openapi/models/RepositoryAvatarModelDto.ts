/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AvatarCameraConfig } from './AvatarCameraConfig';
export type RepositoryAvatarModelDto = {
    modelType: RepositoryAvatarModelDto.modelType;
    name?: string;
    modelPath: string;
    gender: RepositoryAvatarModelDto.gender;
    camera?: AvatarCameraConfig;
    cameraMobile?: AvatarCameraConfig;
};
export namespace RepositoryAvatarModelDto {
    export enum modelType {
        READYPLAYERME = 'readyplayerme',
        CUSTOM = 'custom',
    }
    export enum gender {
        M = 'M',
        F = 'F',
    }
}

