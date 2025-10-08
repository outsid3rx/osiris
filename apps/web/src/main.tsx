import './shared/styles/global.css'
import './index.css'
import './i18n'

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
      <reatomContext.Provider value={ctx}>
        <App />
      </reatomContext.Provider>
    </StrictMode>,
  )
}
