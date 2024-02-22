/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type ToolsRequestSchemaAuthBearer = {
    /**
     * Supported options are "client_credentials" or "password".
     */
    clientType?: string;
    /**
     * Required for client type "client_credentials"
     */
    clientId?: string;
    /**
     * Required for client type "client_credentials"
     */
    clientSecret?: string;
    /**
     * Required for client type "password"
     */
    username?: string;
    /**
     * Required for client type "password"
     */
    password?: string;
    audience?: string;
    tokenUrl: string;
    refreshUrl?: string;
};

