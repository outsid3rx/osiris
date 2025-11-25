import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OAuthAccountWhereUniqueInputObjectSchema as OAuthAccountWhereUniqueInputObjectSchema } from './objects/OAuthAccountWhereUniqueInput.schema';

export const OAuthAccountFindUniqueSchema: z.ZodType<Prisma.OAuthAccountFindUniqueArgs> = z.object({   where: OAuthAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OAuthAccountFindUniqueArgs>;

export const OAuthAccountFindUniqueZodSchema = z.object({   where: OAuthAccountWhereUniqueInputObjectSchema }).strict();