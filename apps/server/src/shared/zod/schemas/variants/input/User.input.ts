import * as z from 'zod';

// prettier-ignore
export const UserInputSchema = z.object({
    email: z.string(),
    name: z.string().optional().nullable(),
    avatar: z.string().optional().nullable(),
    oauthAccount: z.unknown().optional().nullable(),
    workflows: z.array(z.unknown())
}).strict();

export type UserInputType = z.infer<typeof UserInputSchema>;
