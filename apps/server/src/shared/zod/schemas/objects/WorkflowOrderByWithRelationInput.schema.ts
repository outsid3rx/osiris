import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  content: SortOrderSchema.optional()
}).strict();
export const WorkflowOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowOrderByWithRelationInput>;
export const WorkflowOrderByWithRelationInputObjectZodSchema = makeSchema();
