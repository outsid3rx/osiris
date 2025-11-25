import * as z from 'zod';

// prettier-ignore
export const OAuthAccountInputSchema = z.object({
    provider: z.string(),
    providerId: z.string(),
    email: z.string(),
    name: z.string().optional().nullable(),
    avatar: z.string().optional().nullable(),
    userId: z.string(),
    user: z.unknown()
}).strict();

export type OAuthAccountInputType = z.infer<typeof OAuthAccountInputSchema>;
