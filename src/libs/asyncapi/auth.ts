// generated, do not edit

import { Broker } from '../broker';

import { UpdateUserEventDto } from './models';

export class Auth {
  constructor(private readonly broker: Broker) {}

  async userUpdate(event: UpdateUserEventDto, params?: { appId?: string }) {
    return this.broker.publish<UpdateUserEventDto>(
      'app/:appId/auth/update',
      event,
      params,
    );
  }

  async onUserUpdate(
    fn: (event: UpdateUserEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UpdateUserEventDto>(
      'app/:appId/auth/update',
      fn,
      params,
    );
  }

  async userRegistration(
    event: UpdateUserEventDto,
    params?: { appId?: string },
  ) {
    return this.broker.publish<UpdateUserEventDto>(
      'app/:appId/auth/create',
      event,
      params,
    );
  }

  async onUserRegistration(
    fn: (event: UpdateUserEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UpdateUserEventDto>(
      'app/:appId/auth/create',
      fn,
      params,
    );
  }

  async userLogin(event: UpdateUserEventDto, params?: { appId?: string }) {
    return this.broker.publish<UpdateUserEventDto>(
      'app/:appId/auth/login',
      event,
      params,
    );
  }

  async onUserLogin(
    fn: (event: UpdateUserEventDto) => void | Promise<void>,
    params?: { appId?: string },
  ): Promise<() => void> {
    return this.broker.subscribe<UpdateUserEventDto>(
      'app/:appId/auth/login',
      fn,
      params,
    );
  }
}
