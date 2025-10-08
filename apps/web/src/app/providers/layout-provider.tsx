import { PropsWithChildren } from 'react'

import { Header } from '~widgets/header'

export const LayoutProvider = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
  </>
)
