import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema';
import { JsonNullValueInputSchema } from '../enums/JsonNullValueInput.schema'


const literalSchema = z.union([z.string(), z.number(), z.boolean()]);
const jsonSchema: any = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(z.string(), jsonSchema.nullable())])
);

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  content: z.union([JsonNullValueInputSchema, jsonSchema]).optional()
}).strict();
export const WorkflowUncheckedUpdateManyInputObjectSchema: z.ZodType<Prisma.WorkflowUncheckedUpdateManyInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowUncheckedUpdateManyInput>;
export const WorkflowUncheckedUpdateManyInputObjectZodSchema = makeSchema();
