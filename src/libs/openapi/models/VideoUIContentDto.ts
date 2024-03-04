/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { VideoContentDto } from './VideoContentDto';
export type VideoUIContentDto = {
    appId: string;
    /**
     * Reference to the authenticated client the request originated from
     */
    clientId?: string;
    /**
     * Reference to the user interacting with the system
     */
    userId?: string;
    /**
     * Track the interaction session, if available
     */
    sessionId?: string;
    contentType: VideoUIContentDto.contentType;
    content: VideoContentDto;
    metadata?: Record<string, any>;
    options: Record<string, any>;
    chunkId?: number;
    messageId?: string;
};
export namespace VideoUIContentDto {
    export enum contentType {
        VIDEO = 'video',
        IMAGE = 'image',
        PDF = 'pdf',
        WEBPAGE = 'webpage',
        OBJECT = 'object',
        TEXT = 'text',
        EMAIL = 'email',
        HTML = 'html',
        LINK = 'link',
        DIALOGUE_MESSAGE = 'dialogue-message',
        NAVIGATION = 'navigation',
        BUTTONS = 'buttons',
        QUIZ = 'quiz',
        CLEAR_SCREEN = 'clear-screen',
    }
}

