import { useCallback } from 'react'

import { useTheme } from '~app/providers'
import { useLanguageSwitcher } from '~features/language-switcher'

export const useHeader = () => {
  const { setTheme } = useTheme()

  const handleLanguageSwitch = useLanguageSwitcher()

  const handleThemeSwitch = useCallback(
    (theme: 'light' | 'dark' | 'system') => {
      setTheme(theme)
    },
    [setTheme],
  )

  return {
    handleLanguageSwitch,
    handleThemeSwitch,
  }
}
