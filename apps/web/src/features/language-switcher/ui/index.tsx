import { useTranslation } from 'react-i18next'

import { useLanguageSwitcher } from '~features/language-switcher/model'
import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '~shared/shadcn/components/ui'

export const LanguageSwitcher = () => {
  const { t } = useTranslation('global')
  const changeLanguage = useLanguageSwitcher()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button size="sm" variant="outline">
          {t('languageSettings')}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={changeLanguage.bind(this, 'en')}>
            English
          </DropdownMenuItem>
          <DropdownMenuItem onClick={changeLanguage.bind(this, 'ru')}>
            Русский
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
