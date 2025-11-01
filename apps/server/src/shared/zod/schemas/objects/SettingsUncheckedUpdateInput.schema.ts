import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFieldUpdateOperationsInputObjectSchema as StringFieldUpdateOperationsInputObjectSchema } from './StringFieldUpdateOperationsInput.schema'

const makeSchema = () => z.object({
  id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
  passwordHash: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional()
}).strict();
export const SettingsUncheckedUpdateInputObjectSchema: z.ZodType<Prisma.SettingsUncheckedUpdateInput> = makeSchema() as unknown as z.ZodType<Prisma.SettingsUncheckedUpdateInput>;
export const SettingsUncheckedUpdateInputObjectZodSchema = makeSchema();
