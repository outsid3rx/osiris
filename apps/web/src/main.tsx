import './index.css'

import ky from 'ky'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { apiCall } from 'revortex/dist/wrapper'

import { App } from './App'
import { createApi } from './lib/api'

await createApi(ky, apiCall).SettingsController.isFirstSetup()

const root = document.querySelector('#root')

if (root) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
