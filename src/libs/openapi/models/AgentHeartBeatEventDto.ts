/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type AgentHeartBeatEventDto = {
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
    moduleId: string;
    status: 'unavailable' | 'error' | 'not_ready' | 'ready' | 'loading' | 'interacting' | 'waiting' | 'processing';
};

