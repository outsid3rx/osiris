import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettingsWhereUniqueInputObjectSchema as SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsDeleteOneSchema: z.ZodType<Prisma.SettingsDeleteArgs> = z.object({   where: SettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingsDeleteArgs>;

export const SettingsDeleteOneZodSchema = z.object({   where: SettingsWhereUniqueInputObjectSchema }).strict();