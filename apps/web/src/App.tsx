import { reatomComponent } from '@reatom/npm-react'
import { clsx } from 'clsx'

import {
  anonymousRouter,
  authorizedRouter,
  RouteProvider,
  ThemeProvider,
} from '~app/providers'
import { authAtom } from '~entities/auth'

export const App = reatomComponent(({ ctx }) => {
  const profile = ctx.spy(authAtom.dataAtom)

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className={clsx({ 'm-auto': !profile })}>
        <RouteProvider router={profile ? authorizedRouter : anonymousRouter} />
      </main>
    </ThemeProvider>
  )
})
