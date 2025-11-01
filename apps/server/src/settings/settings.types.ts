import * as z from 'zod'

import { SettingsSchema } from '../shared/zod/schemas'

export const SettingsUpdateSchema = SettingsSchema.omit({
  id: true,
  passwordHash: true,
})
export const SettingsCreateSchema = SettingsUpdateSchema.extend({
  password: z.string().min(8).max(16),
})

export type SettingsUpdatePayload = z.infer<typeof SettingsUpdateSchema>
export type SettingsCreatePayload = z.infer<typeof SettingsCreateSchema>
