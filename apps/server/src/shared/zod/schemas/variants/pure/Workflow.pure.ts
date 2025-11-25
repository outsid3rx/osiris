import * as z from 'zod';

// prettier-ignore
export const WorkflowModelSchema = z.object({
    id: z.string(),
    name: z.string(),
    content: z.unknown(),
    userId: z.string(),
    user: z.unknown(),
    createdAt: z.date(),
    updatedAt: z.date()
}).strict();

export type WorkflowPureType = z.infer<typeof WorkflowModelSchema>;
