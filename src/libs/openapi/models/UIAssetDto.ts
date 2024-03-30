/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UIAssetMetadataDto } from './UIAssetMetadataDto';
export type UIAssetDto = {
    filename: string;
    appId: string;
    type?: 'models' | 'backgrounds' | 'animations' | 'documents';
    userId?: string;
    ts?: string;
    metadata?: UIAssetMetadataDto;
};

