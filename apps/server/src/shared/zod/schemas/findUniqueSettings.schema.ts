import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettingsWhereUniqueInputObjectSchema as SettingsWhereUniqueInputObjectSchema } from './objects/SettingsWhereUniqueInput.schema';

export const SettingsFindUniqueSchema: z.ZodType<Prisma.SettingsFindUniqueArgs> = z.object({   where: SettingsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingsFindUniqueArgs>;

export const SettingsFindUniqueZodSchema = z.object({   where: SettingsWhereUniqueInputObjectSchema }).strict();