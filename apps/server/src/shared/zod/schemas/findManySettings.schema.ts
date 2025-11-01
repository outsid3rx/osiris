import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettingsOrderByWithRelationInputObjectSchema as SettingsOrderByWithRelationInputObjectSchema } from './objects/SettingsOrderByWithRelationInput.schema';
import { SettingsWhereInputObjectSchema as SettingsWhereInputObjectSchema } from './objects/SettingsWhereInput.schema';
import { SettingsWhereUniqueInputObjectSchema as SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';
import { SettingsScalarFieldEnumSchema } from './enums/SettingsScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const SettingsFindManySelectSchema: z.ZodType<Prisma.SettingsSelect> = z.object({
    id: z.boolean().optional(),
    passwordHash: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.SettingsSelect>;

export const SettingsFindManySelectZodSchema = z.object({
    id: z.boolean().optional(),
    passwordHash: z.boolean().optional()
  }).strict();

export const SettingsFindManySchema: z.ZodType<Prisma.SettingsFindManyArgs> = z.object({ select: SettingsFindManySelectSchema.optional(),  orderBy: z.union([SettingsOrderByWithRelationInputObjectSchema, SettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingsWhereInputObjectSchema.optional(), cursor: SettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingsScalarFieldEnumSchema, SettingsScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.SettingsFindManyArgs>;

export const SettingsFindManyZodSchema = z.object({ select: SettingsFindManySelectSchema.optional(),  orderBy: z.union([SettingsOrderByWithRelationInputObjectSchema, SettingsOrderByWithRelationInputObjectSchema.array()]).optional(), where: SettingsWhereInputObjectSchema.optional(), cursor: SettingsWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([SettingsScalarFieldEnumSchema, SettingsScalarFieldEnumSchema.array()]).optional() }).strict();