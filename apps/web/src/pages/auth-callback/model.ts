import { action } from '@reatom/framework'
import { searchParamsAtom } from '@reatom/url'

export const callbackAction = action((ctx) => {
  const token = ctx.get(searchParamsAtom).token
  if (!token) {
    return window.location.replace('/')
  }

  localStorage.setItem('auth-token', token)
  window.location.replace('/')
}, 'authCallbackAction')
