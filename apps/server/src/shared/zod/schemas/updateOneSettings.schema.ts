import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettingsUpdateInputObjectSchema as SettingsUpdateInputObjectSchema } from './objects/SettingsUpdateInput.schema';
import { SettingsUncheckedUpdateInputObjectSchema as SettingsUncheckedUpdateInputObjectSchema } from './objects/SettingsUncheckedUpdateInput.schema';
import { SettingsWhereUniqueInputObjectSchema as SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsUpdateOneSchema: z.ZodType<Prisma.SettingsUpdateArgs> = z.object({   data: z.union([SettingsUpdateInputObjectSchema, SettingsUncheckedUpdateInputObjectSchema]), where: SettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingsUpdateArgs>;

export const SettingsUpdateOneZodSchema = z.object({   data: z.union([SettingsUpdateInputObjectSchema, SettingsUncheckedUpdateInputObjectSchema]), where: SettingsWhereUniqueInputObjectSchema }).strict();