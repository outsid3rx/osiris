import * as z from 'zod';

export const SettingsScalarFieldEnumSchema = z.enum(['id', 'passwordHash'])

export type SettingsScalarFieldEnum = z.infer<typeof SettingsScalarFieldEnumSchema>;