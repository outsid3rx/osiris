import * as z from 'zod';

// prettier-ignore
export const SettingsModelSchema = z.object({
    id: z.string(),
    passwordHash: z.string()
}).strict();

export type SettingsPureType = z.infer<typeof SettingsModelSchema>;
