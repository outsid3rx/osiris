import * as z from 'zod';

// prettier-ignore
export const SettingsInputSchema = z.object({
    passwordHash: z.string()
}).strict();

export type SettingsInputType = z.infer<typeof SettingsInputSchema>;
