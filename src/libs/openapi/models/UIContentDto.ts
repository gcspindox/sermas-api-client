/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UIContentDto = {
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
    contentType: string;
    content: Record<string, any>;
    metadata: Record<string, any>;
    options: Record<string, any>;
    chunkId?: number;
    messageId?: string;
};

