import * as z from 'zod';

export const OAuthAccountSchema = z.object({
  id: z.string(),
  provider: z.string(),
  providerId: z.string(),
  email: z.string(),
  name: z.string().nullish(),
  avatar: z.string().nullish(),
  userId: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type OAuthAccountType = z.infer<typeof OAuthAccountSchema>;
