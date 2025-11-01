import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  passwordHash: SortOrderSchema.optional()
}).strict();
export const SettingsOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.SettingsOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingsOrderByWithRelationInput>;
export const SettingsOrderByWithRelationInputObjectZodSchema = makeSchema();
