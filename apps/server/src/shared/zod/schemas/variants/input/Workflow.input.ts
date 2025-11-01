import * as z from 'zod';

// prettier-ignore
export const WorkflowInputSchema = z.object({
    name: z.string(),
    content: z.unknown()
}).strict();

export type WorkflowInputType = z.infer<typeof WorkflowInputSchema>;
