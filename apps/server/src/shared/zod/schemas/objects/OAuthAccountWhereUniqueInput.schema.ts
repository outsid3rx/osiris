import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { OAuthAccountProviderProviderIdCompoundUniqueInputObjectSchema as OAuthAccountProviderProviderIdCompoundUniqueInputObjectSchema } from './OAuthAccountProviderProviderIdCompoundUniqueInput.schema'

const makeSchema = () => z.object({
  id: z.string().optional(),
  userId: z.string().optional(),
  provider_providerId: z.lazy(() => OAuthAccountProviderProviderIdCompoundUniqueInputObjectSchema).optional()
}).strict();
export const OAuthAccountWhereUniqueInputObjectSchema: z.ZodType<Prisma.OAuthAccountWhereUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OAuthAccountWhereUniqueInput>;
export const OAuthAccountWhereUniqueInputObjectZodSchema = makeSchema();
