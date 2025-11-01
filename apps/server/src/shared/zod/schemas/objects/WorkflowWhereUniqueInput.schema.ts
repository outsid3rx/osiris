import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  id: z.string().optional()
}).strict();
export const WorkflowWhereUniqueInputObjectSchema: z.ZodType<Prisma.WorkflowWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.WorkflowWhereUniqueInput>;
export const WorkflowWhereUniqueInputObjectZodSchema = makeSchema();
