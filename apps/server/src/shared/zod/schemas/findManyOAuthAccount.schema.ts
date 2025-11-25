import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { OAuthAccountOrderByWithRelationInputObjectSchema as OAuthAccountOrderByWithRelationInputObjectSchema } from './objects/OAuthAccountOrderByWithRelationInput.schema';
import { OAuthAccountWhereInputObjectSchema as OAuthAccountWhereInputObjectSchema } from './objects/OAuthAccountWhereInput.schema';
import { OAuthAccountWhereUniqueInputObjectSchema as OAuthAccountWhereUniqueInputObjectSchema } from './objects/OAuthAccountWhereUniqueInput.schema';
import { OAuthAccountScalarFieldEnumSchema } from './enums/OAuthAccountScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const OAuthAccountFindManySelectSchema: z.ZodType<Prisma.OAuthAccountSelect> = z.object({
    id: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    avatar: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.OAuthAccountSelect>;

export const OAuthAccountFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    provider: z.boolean().optional(),
    providerId: z.boolean().optional(),
    email: z.boolean().optional(),
    name: z.boolean().optional(),
    avatar: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional()
  }).strict();

export const OAuthAccountFindManySchema: z.ZodType<Prisma.OAuthAccountFindManyArgs> = z.object({ select: OAuthAccountFindManySelectSchema.optional(),  orderBy: z.union([OAuthAccountOrderByWithRelationInputObjectSchema, OAuthAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: OAuthAccountWhereInputObjectSchema.optional(), cursor: OAuthAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OAuthAccountScalarFieldEnumSchema, OAuthAccountScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.OAuthAccountFindManyArgs>;

export const OAuthAccountFindManyZodSchema = z.object({ select: OAuthAccountFindManySelectSchema.optional(),  orderBy: z.union([OAuthAccountOrderByWithRelationInputObjectSchema, OAuthAccountOrderByWithRelationInputObjectSchema.array()]).optional(), where: OAuthAccountWhereInputObjectSchema.optional(), cursor: OAuthAccountWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([OAuthAccountScalarFieldEnumSchema, OAuthAccountScalarFieldEnumSchema.array()]).optional() }).strict();