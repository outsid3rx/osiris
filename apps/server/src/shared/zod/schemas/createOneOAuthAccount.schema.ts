import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OAuthAccountUncheckedCreateInputObjectSchema as OAuthAccountUncheckedCreateInputObjectSchema } from './objects/OAuthAccountUncheckedCreateInput.schema';

export const OAuthAccountCreateOneSchema: z.ZodType<Prisma.OAuthAccountCreateArgs> = z.object({   data: OAuthAccountUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OAuthAccountCreateArgs>;

export const OAuthAccountCreateOneZodSchema = z.object({   data: OAuthAccountUncheckedCreateInputObjectSchema }).strict();