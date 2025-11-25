import { atom } from '@reatom/framework'
import { withLocalStorage } from '@reatom/persist-web-storage'
import { useCallback } from 'react'
import * as z from 'zod'

import { useTheme } from '~app/providers'
import { useLanguageSwitcher } from '~features/language-switcher'

export const useGetAuthRedirect = () => {
  return useCallback(
    (provider: 'google' | 'yandex') => () => {
      window.location.replace(`/api/auth/${provider}`)
    },
    [],
  )
}

export const useLocalSettings = () => {
  const { setTheme } = useTheme()

  const handleLanguageSwitch = useLanguageSwitcher()

  const handleThemeSwitch = useCallback(
    (theme: z.infer<typeof LocalSettingsSchema>['theme']) => {
      setTheme(theme)
    },
    [setTheme],
  )

  return {
    handleLanguageSwitch,
    handleThemeSwitch,
  }
}

export const LocalSettingsSchema = z.object({
  theme: z.enum(['light', 'dark', 'system']),
  lang: z.enum(['en', 'ru']),
})

export type LocalSettingsType = z.infer<typeof LocalSettingsSchema>

export const localSettingsAtom = atom<z.infer<typeof LocalSettingsSchema>>({
  theme: 'system',
  lang: 'ru',
}).pipe(withLocalStorage('ui-local-settings'))
