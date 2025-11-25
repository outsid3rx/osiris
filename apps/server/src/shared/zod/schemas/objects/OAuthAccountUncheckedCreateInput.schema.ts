import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  provider: z.string(),
  providerId: z.string(),
  email: z.string(),
  name: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  userId: z.string(),
  createdAt: z.coerce.date().optional()
}).strict();
export const OAuthAccountUncheckedCreateInputObjectSchema: z.ZodType<Prisma.OAuthAccountUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.OAuthAccountUncheckedCreateInput>;
export const OAuthAccountUncheckedCreateInputObjectZodSchema = makeSchema();
