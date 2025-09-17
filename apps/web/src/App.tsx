import './App.css'

import { reatomComponent } from '@reatom/npm-react'

import { settingsAtom } from '~entities/settings'
import { SettingsPage } from '~pages/settings'
import { SplashScreenPage } from '~pages/splash-screen'

export const App = reatomComponent(({ ctx }) => {
  const { isFirstSetup } = ctx.spy(settingsAtom.dataAtom)

  return isFirstSetup ? <SettingsPage /> : <SplashScreenPage />
})
