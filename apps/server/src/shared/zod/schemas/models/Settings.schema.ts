import * as z from 'zod';

export const SettingsSchema = z.object({
  id: z.string(),
  passwordHash: z.string(),
});

export type SettingsType = z.infer<typeof SettingsSchema>;
