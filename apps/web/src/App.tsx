import { reatomComponent } from '@reatom/npm-react'

import { LayoutProvider, ThemeProvider } from '~app/providers'
import { settingsAtom } from '~entities/settings'
import { SettingsPage } from '~pages/settings'
import { SplashScreenPage } from '~pages/splash-screen'

export const App = reatomComponent(({ ctx }) => {
  const { isFirstSetup } = ctx.spy(settingsAtom.dataAtom)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LayoutProvider>
        {isFirstSetup ? <SettingsPage /> : <SplashScreenPage />}
      </LayoutProvider>
    </ThemeProvider>
  )
})
