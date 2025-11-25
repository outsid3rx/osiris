import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OAuthAccountWhereUniqueInputObjectSchema as OAuthAccountWhereUniqueInputObjectSchema } from './objects/OAuthAccountWhereUniqueInput.schema';

export const OAuthAccountDeleteOneSchema: z.ZodType<Prisma.OAuthAccountDeleteArgs> = z.object({   where: OAuthAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OAuthAccountDeleteArgs>;

export const OAuthAccountDeleteOneZodSchema = z.object({   where: OAuthAccountWhereUniqueInputObjectSchema }).strict();