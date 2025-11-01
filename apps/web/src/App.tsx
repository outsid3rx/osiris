import { reatomComponent } from '@reatom/npm-react'

import { RouteProvider, ThemeProvider } from '~app/providers'
import { settingsAtom } from '~entities/settings'
import { SettingsPage } from '~pages/settings'

export const App = reatomComponent(({ ctx }) => {
  const { isFirstSetup } = ctx.spy(settingsAtom.dataAtom)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {isFirstSetup ? <SettingsPage /> : <RouteProvider />}
    </ThemeProvider>
  )
})
