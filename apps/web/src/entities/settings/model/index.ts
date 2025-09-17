import {
  onConnect,
  reatomAsync,
  withDataAtom,
  withStatusesAtom,
} from '@reatom/framework'

import { apiClient } from '~shared/api'

export const settingsAtom = reatomAsync(() =>
  apiClient.SettingsController.isFirstSetup(),
).pipe(withDataAtom({ isFirstSetup: false }), withStatusesAtom())

onConnect(settingsAtom, settingsAtom)
