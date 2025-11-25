import {
  onConnect,
  reatomAsync,
  withCache,
  withDataAtom,
  withStatusesAtom,
} from '@reatom/framework'

import { apiClient } from '~shared/api'

export const authAtom = reatomAsync(() =>
  apiClient.AuthController.getProfile(),
).pipe(withCache(), withDataAtom(), withStatusesAtom())

onConnect(authAtom, authAtom)
