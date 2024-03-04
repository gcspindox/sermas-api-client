/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type UserInteractionIntentionDto = {
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
     * Module generating the event
     */
    moduleId: string;
    source: string;
    probability: number;
    interactionType: UserInteractionIntentionDto.interactionType;
    sessionId: string;
};
export namespace UserInteractionIntentionDto {
    export enum interactionType {
        START = 'start',
        STOP = 'stop',
    }
}

