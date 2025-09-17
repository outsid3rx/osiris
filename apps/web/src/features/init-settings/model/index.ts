import { reatomAsync, withStatusesAtom } from '@reatom/framework'

import { SettingsCreatePayload } from '~server/settings/settings.types.ts'
import { apiClient } from '~shared/api'

export const initSettings = reatomAsync((_ctx, data: SettingsCreatePayload) => {
  return apiClient.SettingsController.initSettings({ body: data })
}).pipe(withStatusesAtom())
