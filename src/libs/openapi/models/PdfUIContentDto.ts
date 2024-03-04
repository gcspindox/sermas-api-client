/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PdfContentDto } from './PdfContentDto';
export type PdfUIContentDto = {
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
    contentType: PdfUIContentDto.contentType;
    content: PdfContentDto;
    metadata?: Record<string, any>;
    options: Record<string, any>;
    chunkId?: number;
    messageId?: string;
};
export namespace PdfUIContentDto {
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

