import { reatomAsync, withStatusesAtom } from '@reatom/framework'

import { settingsAtom } from '~entities/settings'
import { SettingsCreatePayload } from '~server/settings/settings.types'
import { apiClient } from '~shared/api'

export const initSettings = reatomAsync(
  async (ctx, data: SettingsCreatePayload) => {
    await ctx.schedule(() =>
      apiClient.SettingsController.initSettings({ body: data }),
    )
    settingsAtom.cacheAtom.invalidate(ctx)
  },
).pipe(withStatusesAtom())
