import type { KyInstance } from 'ky'
import type { AbstractApiMethod } from 'revortex'

import type { AuthController } from '~server/auth/auth.controller'
import type { TeamController } from '~server/team/team.controller'

export namespace Api {
  export namespace AuthController {
    export interface GoogleLogin {
      Return: Awaited<ReturnType<AuthController['googleLogin']>>
    }
    export interface GoogleLoginCallback {
      Return: Awaited<ReturnType<AuthController['googleLoginCallback']>>
    }
    export interface YandexLogin {
      Return: Awaited<ReturnType<AuthController['yandexLogin']>>
    }
    export interface YandexLoginCallback {
      Return: Awaited<ReturnType<AuthController['yandexLoginCallback']>>
    }
    export interface GetProfile {
      Return: Awaited<ReturnType<AuthController['getProfile']>>
    }
  }
  export namespace TeamController {
    export interface GetUserTeams {
      Return: Awaited<ReturnType<TeamController['getUserTeams']>>
    }
  }
}
export function createApi(
  kyInstance: KyInstance,
  apiCallWrapper: <T extends AbstractApiMethod>(
    client: KyInstance,
    options: {
      param?: T['Param']
      query?: T['Query']
      body?: T['Body']
      method: string
      url: string
    },
  ) => Promise<T['Return']>,
) {
  return {
    AuthController: {
      googleLogin: () =>
        apiCallWrapper<Api.AuthController.GoogleLogin>(kyInstance, {
          url: '/api/auth/google',
          method: 'get',
        }),
      googleLoginCallback: () =>
        apiCallWrapper<Api.AuthController.GoogleLoginCallback>(kyInstance, {
          url: '/api/auth/google/callback',
          method: 'get',
        }),
      yandexLogin: () =>
        apiCallWrapper<Api.AuthController.YandexLogin>(kyInstance, {
          url: '/api/auth/yandex',
          method: 'get',
        }),
      yandexLoginCallback: () =>
        apiCallWrapper<Api.AuthController.YandexLoginCallback>(kyInstance, {
          url: '/api/auth/yandex/callback',
          method: 'get',
        }),
      getProfile: () =>
        apiCallWrapper<Api.AuthController.GetProfile>(kyInstance, {
          url: '/api/auth/me',
          method: 'get',
        }),
    },
    TeamController: {
      getUserTeams: () =>
        apiCallWrapper<Api.TeamController.GetUserTeams>(kyInstance, {
          url: '/api/team/',
          method: 'get',
        }),
    },
  }
}
