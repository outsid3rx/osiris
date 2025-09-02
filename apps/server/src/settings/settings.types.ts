import { Settings } from '@prisma/client'

export type SettingsUpdatePayload = Partial<
  Omit<Settings, 'id' | 'passwordHash'>
>
export type SettingsCreatePayload = Omit<Settings, 'id' | 'passwordHash'> & {
  password: string
}
