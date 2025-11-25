import * as z from 'zod';

// prettier-ignore
export const WorkflowInputSchema = z.object({
    name: z.string(),
    content: z.unknown(),
    userId: z.string(),
    user: z.unknown()
}).strict();

export type WorkflowInputType = z.infer<typeof WorkflowInputSchema>;
