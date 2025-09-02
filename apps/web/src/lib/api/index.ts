import type { KyInstance } from 'ky'
import type { AbstractApiMethod } from 'revortex'

import { SettingsController } from '~server/settings/settings.controller'

export namespace Api {
  export namespace SettingsController {
    export interface IsFirstSetup {
      Return: Awaited<ReturnType<SettingsController['isFirstSetup']>>
    }
    export interface InitSettings {
      Body: Parameters<SettingsController['initSettings']>[0]
      Return: Awaited<ReturnType<SettingsController['initSettings']>>
    }
    export interface UpdateSettings {
      Body: Parameters<SettingsController['updateSettings']>[0]
      Return: Awaited<ReturnType<SettingsController['updateSettings']>>
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
    SettingsController: {
      isFirstSetup: () =>
        apiCallWrapper<Api.SettingsController.IsFirstSetup>(kyInstance, {
          url: 'api/settings/check',
          method: 'get',
        }),
      initSettings: ({
        body,
      }: {
        body: Api.SettingsController.InitSettings['Body']
      }) =>
        apiCallWrapper<Api.SettingsController.InitSettings>(kyInstance, {
          body,
          url: 'api/settings',
          method: 'post',
        }),
      updateSettings: ({
        body,
      }: {
        body: Api.SettingsController.UpdateSettings['Body']
      }) =>
        apiCallWrapper<Api.SettingsController.UpdateSettings>(kyInstance, {
          body,
          url: 'api/settings',
          method: 'patch',
        }),
    },
  }
}
