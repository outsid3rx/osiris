import { Languages, Palette } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from '~shared/shadcn/components/ui'

import { useHeader } from '../model'

export const Header = () => {
  const { t } = useTranslation('global')
  const { handleThemeSwitch, handleLanguageSwitch } = useHeader()

  return (
    <Menubar className="justify-end p-5 rounded-t-[0]">
      <MenubarMenu>
        <MenubarTrigger>
          <Palette className="mr-2 w-4 h-4" /> {t('themeSettings')}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={handleThemeSwitch.bind(this, 'system')}>
            {t('systemTheme')}
          </MenubarItem>
          <MenubarItem onClick={handleThemeSwitch.bind(this, 'light')}>
            {t('lightTheme')}
          </MenubarItem>
          <MenubarItem onClick={handleThemeSwitch.bind(this, 'dark')}>
            {t('darkTheme')}
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>
          <Languages className="mr-2 w-4 h-4" /> {t('languageSettings')}
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem onClick={handleLanguageSwitch.bind(this, 'en')}>
            English
          </MenubarItem>
          <MenubarItem onClick={handleLanguageSwitch.bind(this, 'ru')}>
            Русский
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}
