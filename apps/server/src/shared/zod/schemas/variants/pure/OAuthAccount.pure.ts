import * as z from 'zod';

// prettier-ignore
export const OAuthAccountModelSchema = z.object({
    id: z.string(),
    provider: z.string(),
    providerId: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    avatar: z.string().nullable(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type OAuthAccountPureType = z.infer<typeof OAuthAccountModelSchema>;
