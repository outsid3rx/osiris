import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'


const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: any = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(z.string(), jsonSchema.nullable())])
);

const makeSchema = () => z.object({
  id: z.string().optional(),
  name: z.string(),
  content: z.union([JsonNullValueInputSchema, jsonSchema]),
  userId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();
export const WorkflowCreateManyInputObjectSchema: z.ZodType<Prisma.WorkflowCreateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowCreateManyInput>;
export const WorkflowCreateManyInputObjectZodSchema = makeSchema();
