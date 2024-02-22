/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ToolsRequestSchemaAuthBasic } from './ToolsRequestSchemaAuthBasic';
import type { ToolsRequestSchemaAuthBearer } from './ToolsRequestSchemaAuthBearer';
export type ToolsRequestSchema = {
    /**
     * Supported options are basic, bearer and module. Defaults to module if not specified.
     */
    auth?: string;
    /**
     * Used for "basic" auth type
     */
    basic?: ToolsRequestSchemaAuthBasic;
    /**
     * Used for "bearer" auth type
     */
    bearer?: ToolsRequestSchemaAuthBearer;
    /**
     * Reference to one of the modules (or clients) available in the app
     */
    moduleId: string;
    /**
     * Url to call with a JSON POST. Leave empty to skip API calling
     */
    url: string;
    headers?: Record<string, any>;
};

