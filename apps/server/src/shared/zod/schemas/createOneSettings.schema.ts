import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { SettingsUncheckedCreateInputObjectSchema as SettingsUncheckedCreateInputObjectSchema } from './objects/SettingsUncheckedCreateInput.schema';

export const SettingsCreateOneSchema: z.ZodType<Prisma.SettingsCreateArgs> = z.object({   data: SettingsUncheckedCreateInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.SettingsCreateArgs>;

export const SettingsCreateOneZodSchema = z.object({   data: SettingsUncheckedCreateInputObjectSchema }).strict();