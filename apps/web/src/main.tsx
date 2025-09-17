import './index.css'
import '@mantine/core/styles.css'

import { MantineProvider } from '@mantine/core'
import { connectLogger, createCtx } from '@reatom/framework'
import { reatomContext } from '@reatom/npm-react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'

const ctx = createCtx()

if (import.meta.env.DEV) {
  connectLogger(ctx)
}

const root = document.querySelector('#root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <MantineProvider>
        <reatomContext.Provider value={ctx}>
          <App />
        </reatomContext.Provider>
      </MantineProvider>
    </StrictMode>,
  )
}
