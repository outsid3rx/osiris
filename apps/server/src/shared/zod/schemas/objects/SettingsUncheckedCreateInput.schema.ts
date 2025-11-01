import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  passwordHash: z.string()
}).strict();
export const SettingsUncheckedCreateInputObjectSchema: z.ZodType<Prisma.SettingsUncheckedCreateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingsUncheckedCreateInput>;
export const SettingsUncheckedCreateInputObjectZodSchema = makeSchema();
