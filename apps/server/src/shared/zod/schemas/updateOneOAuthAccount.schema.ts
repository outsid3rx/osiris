import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OAuthAccountUpdateInputObjectSchema as OAuthAccountUpdateInputObjectSchema } from './objects/OAuthAccountUpdateInput.schema';
import { OAuthAccountUncheckedUpdateInputObjectSchema as OAuthAccountUncheckedUpdateInputObjectSchema } from './objects/OAuthAccountUncheckedUpdateInput.schema';
import { OAuthAccountWhereUniqueInputObjectSchema as OAuthAccountWhereUniqueInputObjectSchema } from './objects/OAuthAccountWhereUniqueInput.schema';

export const OAuthAccountUpdateOneSchema: z.ZodType<Prisma.OAuthAccountUpdateArgs> = z.object({   data: z.union([OAuthAccountUpdateInputObjectSchema, OAuthAccountUncheckedUpdateInputObjectSchema]), where: OAuthAccountWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.OAuthAccountUpdateArgs>;

export const OAuthAccountUpdateOneZodSchema = z.object({   data: z.union([OAuthAccountUpdateInputObjectSchema, OAuthAccountUncheckedUpdateInputObjectSchema]), where: OAuthAccountWhereUniqueInputObjectSchema }).strict();