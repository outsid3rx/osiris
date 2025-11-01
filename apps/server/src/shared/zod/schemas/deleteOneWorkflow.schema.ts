import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';

export const WorkflowDeleteOneSchema: z.ZodType<Prisma.WorkflowDeleteArgs> = z.object({   where: WorkflowWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowDeleteArgs>;

export const WorkflowDeleteOneZodSchema = z.object({   where: WorkflowWhereUniqueInputObjectSchema }).strict();