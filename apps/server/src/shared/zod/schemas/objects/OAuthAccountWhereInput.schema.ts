import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { StringFilterObjectSchema as StringFilterObjectSchema } from './StringFilter.schema';
import { StringNullableFilterObjectSchema as StringNullableFilterObjectSchema } from './StringNullableFilter.schema';
import { DateTimeFilterObjectSchema as DateTimeFilterObjectSchema } from './DateTimeFilter.schema'

const oauthaccountwhereinputSchema = z.object({
  AND: z.union([z.lazy(() => OAuthAccountWhereInputObjectSchema), z.lazy(() => OAuthAccountWhereInputObjectSchema).array()]).optional(),
  OR: z.lazy(() => OAuthAccountWhereInputObjectSchema).array().optional(),
  NOT: z.union([z.lazy(() => OAuthAccountWhereInputObjectSchema), z.lazy(() => OAuthAccountWhereInputObjectSchema).array()]).optional(),
  id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  provider: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  providerId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  name: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  avatar: z.union([z.lazy(() => StringNullableFilterObjectSchema), z.string()]).optional().nullable(),
  userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional()
}).strict();
export const OAuthAccountWhereInputObjectSchema: z.ZodType<Prisma.OAuthAccountWhereInput> = oauthaccountwhereinputSchema as unknown as z.ZodType<Prisma.OAuthAccountWhereInput>;
export const OAuthAccountWhereInputObjectZodSchema = oauthaccountwhereinputSchema;
