import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema'

const settingswhereinputSchema = z.object({
  AND: z.union([z.lazy(() => SettingsWhereInputObjectSchema), z.lazy(() => SettingsWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => SettingsWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => SettingsWhereInputObjectSchema), z.lazy(() => SettingsWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  passwordHash: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional()
}).strict();
export const SettingsWhereInputObjectSchema: z.ZodType<Prisma.SettingsWhereInput> = settingswhereinputSchema as unknown as z.ZodType<Prisma.SettingsWhereInput>;
export const SettingsWhereInputObjectZodSchema = settingswhereinputSchema;
