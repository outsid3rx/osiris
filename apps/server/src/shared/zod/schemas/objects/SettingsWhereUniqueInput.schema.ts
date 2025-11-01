import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const SettingsWhereUniqueInputObjectSchema: z.ZodType<Prisma.SettingsWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingsWhereUniqueInput>;
export const SettingsWhereUniqueInputObjectZodSchema = makeSchema();
