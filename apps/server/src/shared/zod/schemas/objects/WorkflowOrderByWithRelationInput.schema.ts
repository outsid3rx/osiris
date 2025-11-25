import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { SortOrderSchema } from '../enums/SortOrder.schema';
import { UserOrderByWithRelationInputObjectSchema as UserOrderByWithRelationInputObjectSchema } from './UserOrderByWithRelationInput.schema'

const makeSchema = () => z.object({
  id: SortOrderSchema.optional(),
  name: SortOrderSchema.optional(),
  content: SortOrderSchema.optional(),
  userId: SortOrderSchema.optional(),
  createdAt: SortOrderSchema.optional(),
  updatedAt: SortOrderSchema.optional(),
  user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional()
}).strict();
export const WorkflowOrderByWithRelationInputObjectSchema: z.ZodType<Prisma.WorkflowOrderByWithRelationInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowOrderByWithRelationInput>;
export const WorkflowOrderByWithRelationInputObjectZodSchema = makeSchema();
