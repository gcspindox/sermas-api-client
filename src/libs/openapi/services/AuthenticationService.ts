import type {
  AuthJwtUser,
  LoginRequestDto,
  LoginResponseDto,
  RefreshTokenRequestDto,
  RegistrationRequestDto,
  RegistrationResponseDto,
  UpdateUserRequestDto,
} from '../models';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export type TDataLogin = {
  requestBody: LoginRequestDto;
};
export type TDataRegister = {
  requestBody: RegistrationRequestDto;
};
export type TDataRefreshToken = {
  requestBody: RefreshTokenRequestDto;
};
export type TDataEdit = {
  requestBody: UpdateUserRequestDto;
  userId: string;
};
export type TDataDelete = {
  userId: string;
};
export type TDataAuthAdminControllerSaveUser = {
  requestBody: RegistrationRequestDto;
};
export type TDataAuthAdminControllerImportUser = {
  requestBody: Array<string>;
};

export class AuthenticationService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * @returns AuthJwtUser
   * @throws ApiError
   */
  public whoami(): CancelablePromise<AuthJwtUser> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/api/auth/whoami',
      errors: {
        401: `Not authorized`,
      },
    });
  }

  /**
   * @returns LoginResponseDto Login user
   * @throws ApiError
   */
  public login(data: TDataLogin): CancelablePromise<LoginResponseDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/login',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Not authorized`,
      },
    });
  }

  /**
   * @returns RegistrationResponseDto Register a new user
   * @throws ApiError
   */
  public register(
    data: TDataRegister,
  ): CancelablePromise<RegistrationResponseDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/register',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns LoginResponseDto Refresh token
   * @throws ApiError
   */
  public refreshToken(
    data: TDataRefreshToken,
  ): CancelablePromise<LoginResponseDto> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/refresh',
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Not authorized`,
      },
    });
  }

  /**
   * @returns any Updates user data
   * @throws ApiError
   */
  public edit(data: TDataEdit): CancelablePromise<any> {
    const { requestBody, userId } = data;
    return this.httpRequest.request({
      method: 'PUT',
      url: '/api/auth/{userId}',
      path: {
        userId,
      },
      body: requestBody,
      mediaType: 'application/json',
      errors: {
        401: `Not authorized`,
      },
    });
  }

  /**
   * @returns any Deletes a user and all of its resources
   * @throws ApiError
   */
  public delete(data: TDataDelete): CancelablePromise<any> {
    const { userId } = data;
    return this.httpRequest.request({
      method: 'DELETE',
      url: '/api/auth/{userId}',
      path: {
        userId,
      },
      errors: {
        401: `Not authorized`,
      },
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public authAdminControllerSaveUser(
    data: TDataAuthAdminControllerSaveUser,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/admin/user',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * @returns any
   * @throws ApiError
   */
  public authAdminControllerImportUser(
    data: TDataAuthAdminControllerImportUser,
  ): CancelablePromise<any> {
    const { requestBody } = data;
    return this.httpRequest.request({
      method: 'POST',
      url: '/api/auth/admin/import',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
