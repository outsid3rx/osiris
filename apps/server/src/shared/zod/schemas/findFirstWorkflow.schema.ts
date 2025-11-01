import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { WorkflowOrderByWithRelationInputObjectSchema as WorkflowOrderByWithRelationInputObjectSchema } from './objects/WorkflowOrderByWithRelationInput.schema';
import { WorkflowWhereInputObjectSchema as WorkflowWhereInputObjectSchema } from './objects/WorkflowWhereInput.schema';
import { WorkflowWhereUniqueInputObjectSchema as WorkflowWhereUniqueInputObjectSchema } from './objects/WorkflowWhereUniqueInput.schema';
import { WorkflowScalarFieldEnumSchema } from './enums/WorkflowScalarFieldEnum.schema';

// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const WorkflowFindFirstSelectSchema: z.ZodType<Prisma.WorkflowSelect> = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    content: z.boolean().optional()
  }).strict() as unknown as z.ZodType<Prisma.WorkflowSelect>;

export const WorkflowFindFirstSelectZodSchema = z.object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    content: z.boolean().optional()
  }).strict();

export const WorkflowFindFirstSchema: z.ZodType<Prisma.WorkflowFindFirstArgs> = z.object({ select: WorkflowFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowOrderByWithRelationInputObjectSchema, WorkflowOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowWhereInputObjectSchema.optional(), cursor: WorkflowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowScalarFieldEnumSchema, WorkflowScalarFieldEnumSchema.array()]).optional() }).strict() as unknown as z.ZodType<Prisma.WorkflowFindFirstArgs>;

export const WorkflowFindFirstZodSchema = z.object({ select: WorkflowFindFirstSelectSchema.optional(),  orderBy: z.union([WorkflowOrderByWithRelationInputObjectSchema, WorkflowOrderByWithRelationInputObjectSchema.array()]).optional(), where: WorkflowWhereInputObjectSchema.optional(), cursor: WorkflowWhereUniqueInputObjectSchema.optional(), take: z.number().optional(), skip: z.number().optional(), distinct: z.union([WorkflowScalarFieldEnumSchema, WorkflowScalarFieldEnumSchema.array()]).optional() }).strict();