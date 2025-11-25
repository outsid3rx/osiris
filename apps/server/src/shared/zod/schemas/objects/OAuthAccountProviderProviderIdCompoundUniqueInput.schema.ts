import * as z from 'zod';
import type { Prisma } from '@prisma/client';


const makeSchema = () => z.object({
  provider: z.string(),
  providerId: z.string()
}).strict();
export const OAuthAccountProviderProviderIdCompoundUniqueInputObjectSchema: z.ZodType<Prisma.OAuthAccountProviderProviderIdCompoundUniqueInput> = makeSchema() as unknown as z.ZodType<Prisma.OAuthAccountProviderProviderIdCompoundUniqueInput>;
export const OAuthAccountProviderProviderIdCompoundUniqueInputObjectZodSchema = makeSchema();
