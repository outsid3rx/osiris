import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkflowUpdateInputObjectSchema as WorkflowUpdateInputObjectSchema } from './objects/WorkflowUpdateInput.schema';
import { WorkflowUncheckedUpdateInputObjectSchema as WorkflowUncheckedUpdateInputObjectSchema } from './objects/WorkflowUncheckedUpdateInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';

export const WorkflowUpdateOneSchema: z.ZodType<Prisma.WorkflowUpdateArgs> = z.object({   data: z.union([WorkflowUpdateInputObjectSchema, WorkflowUncheckedUpdateInputObjectSchema]), where: WorkflowWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowUpdateArgs>;

export const WorkflowUpdateOneZodSchema = z.object({   data: z.union([WorkflowUpdateInputObjectSchema, WorkflowUncheckedUpdateInputObjectSchema]), where: WorkflowWhereUniqueInputObjectSchema }).strict();