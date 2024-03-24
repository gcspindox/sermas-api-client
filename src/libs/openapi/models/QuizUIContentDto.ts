/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { QuizContentDto } from './QuizContentDto';
import type { UIContentOptionsDto } from './UIContentOptionsDto';
export type QuizUIContentDto = {
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
    contentType: 'video' | 'image' | 'pdf' | 'webpage' | 'object' | 'text' | 'email' | 'html' | 'link' | 'dialogue-message' | 'navigation' | 'buttons' | 'quiz' | 'clear-screen';
    content: QuizContentDto;
    metadata?: Record<string, any>;
    options?: UIContentOptionsDto;
    chunkId?: number;
    messageId?: string;
};

