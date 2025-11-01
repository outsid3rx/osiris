import {
  onConnect,
  reatomAsync,
  withCache,
  withDataAtom,
  withStatusesAtom,
} from '@reatom/framework'

import { apiClient } from '~shared/api'

export const settingsAtom = reatomAsync(() =>
  apiClient.SettingsController.isFirstSetup(),
).pipe(withCache(), withDataAtom({ isFirstSetup: false }), withStatusesAtom())

onConnect(settingsAtom, settingsAtom)
