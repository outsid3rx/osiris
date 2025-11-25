import { reatomComponent } from '@reatom/npm-react'
import { AnimatePresence } from 'motion/react'

import { AuthSettings, LocalSettings } from '~widgets/initial-settings/ui'

import { EInitialPage, initialPageAtom } from '../model'

export const InitialPage = reatomComponent(({ ctx }) => {
  const getPage = () => {
    switch (ctx.spy(initialPageAtom)) {
      case EInitialPage.Auth:
        return <AuthSettings />
      default:
      case EInitialPage.Local:
        return (
          <LocalSettings
            onSubmit={() => initialPageAtom(ctx, EInitialPage.Auth)}
          />
        )
    }
  }

  return <AnimatePresence>{getPage()}</AnimatePresence>
})
