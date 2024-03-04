/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type DialogueMessageDto = {
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
    messageId?: string;
    actor: string;
    text: string;
    gender: string;
    language: string;
    emotion?: string;
    llm?: string;
    /**
     * Indicate a chunck identifier as timestamp, usually indicating it is part of a stream.
     */
    chunkId?: number;
};

