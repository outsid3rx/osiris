import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional(),
  passwordHash: z.string()
}).strict();
export const SettingsCreateManyInputObjectSchema: z.ZodType<Prisma.SettingsCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingsCreateManyInput>;
export const SettingsCreateManyInputObjectZodSchema = makeSchema();
