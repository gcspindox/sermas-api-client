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
    status: AgentHeartBeatEventDto.status;
};
export namespace AgentHeartBeatEventDto {
    export enum status {
        UNAVAILABLE = 'unavailable',
        ERROR = 'error',
        NOT_READY = 'not_ready',
        READY = 'ready',
        LOADING = 'loading',
        INTERACTING = 'interacting',
        WAITING = 'waiting',
        PROCESSING = 'processing',
    }
}

