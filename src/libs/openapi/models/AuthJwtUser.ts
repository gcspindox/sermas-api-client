/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { KeycloakJwtTokenResourceAccess } from './KeycloakJwtTokenResourceAccess';
export type AuthJwtUser = {
    exp: number;
    iat: number;
    auth_time: number;
    jti: string;
    iss: string;
    aud: string;
    sub: string;
    typ: string;
    azp: string;
    nonce: string;
    session_state: string;
    acr: string;
    scope: string;
    sid: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    given_name: string;
    family_name: string;
    email: string;
    realm_access: KeycloakJwtTokenResourceAccess;
    resource_access: KeycloakJwtTokenResourceAccess;
    role: string;
    appId: Array<string>;
    roles: Array<string>;
};

