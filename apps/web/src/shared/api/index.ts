import ky from 'ky'
import { apiCall } from 'revortex/dist/wrapper'

import { createApi } from './api'

export const apiClient = createApi(
  ky.create({ headers: { 'content-type': 'application/json' } }),
  apiCall,
)
