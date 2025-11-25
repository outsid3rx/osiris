import * as z from 'zod';

export const OAuthAccountScalarFieldEnumSchema = z.enum(['id', 'provider', 'providerId', 'email', 'name', 'avatar', 'userId', 'createdAt', 'updatedAt'])

export type OAuthAccountScalarFieldEnum = z.infer<typeof OAuthAccountScalarFieldEnumSchema>;