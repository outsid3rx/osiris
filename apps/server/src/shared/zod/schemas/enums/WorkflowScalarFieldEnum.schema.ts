import * as z from 'zod';

export const WorkflowScalarFieldEnumSchema = z.enum(['id', 'name', 'content', 'userId', 'createdAt', 'updatedAt'])

export type WorkflowScalarFieldEnum = z.infer<typeof WorkflowScalarFieldEnumSchema>;