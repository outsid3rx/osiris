import * as z from 'zod';

// prettier-ignore
export const UserModelSchema = z.object({
    id: z.string(),
    email: z.string(),
    name: z.string().nullable(),
    avatar: z.string().nullable(),
    createdAt: z.date(),
    updatedAt: z.date(),
    oauthAccount: z.unknown().nullable(),
    workflows: z.array(z.unknown())
}).strict();

export type UserPureType = z.infer<typeof UserModelSchema>;
