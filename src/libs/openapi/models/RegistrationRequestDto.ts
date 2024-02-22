/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RegistrationRequestDto = {
    appId: string;
    /**
     * Reference to the authenticated client the request originated from
     */
    clientId?: string;
    /**
     * Reference to the user interacting with the system
     */
    userId?: string;
    username: string;
    email: string;
    password: string;
};

