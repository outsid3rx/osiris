import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';

export const WorkflowFindUniqueSchema: z.ZodType<Prisma.WorkflowFindUniqueArgs> = z.object({   where: WorkflowWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.WorkflowFindUniqueArgs>;

export const WorkflowFindUniqueZodSchema = z.object({   where: WorkflowWhereUniqueInputObjectSchema }).strict();