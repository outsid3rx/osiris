import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workflowwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowWhereInputObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowWhereInputObjectSchema), z.lazy(() => WorkflowWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.lazy(() => JsonFilterObjectSchema).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowWhereInputObjectSchema: z.ZodType<Prisma.WorkflowWhereInput> = workflowwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowWhereInput>;
export const WorkflowWhereInputObjectZodSchema = workflowwhereinputSchema;
