import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { JsonFilterObjectSchema as JsonFilterObjectSchema } from './JsonFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const workflowscalarwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => WorkflowScalarWhereInputObjectSchema), z.lazy(() => WorkflowScalarWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => WorkflowScalarWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => WorkflowScalarWhereInputObjectSchema), z.lazy(() => WorkflowScalarWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  content: z.lazy(() => JsonFilterObjectSchema).optional(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const WorkflowScalarWhereInputObjectSchema: z.ZodType<Prisma.WorkflowScalarWhereInput> = workflowscalarwhereinputSchema as unknown as z.ZodType<Prisma.WorkflowScalarWhereInput>;
export const WorkflowScalarWhereInputObjectZodSchema = workflowscalarwhereinputSchema;
