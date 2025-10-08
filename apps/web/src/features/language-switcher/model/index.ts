import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'

export const useLanguageSwitcher = () => {
  const { i18n } = useTranslation()

  return useCallback(
    (lang: 'ru' | 'en') => {
      void i18n.changeLanguage(lang)
    },
    [i18n],
  )
}
