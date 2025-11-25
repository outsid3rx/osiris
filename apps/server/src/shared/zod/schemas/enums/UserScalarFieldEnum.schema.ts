import * as z from 'zod';

export const UserScalarFieldEnumSchema = z.enum(['id', 'email', 'name', 'avatar', 'createdAt', 'updatedAt'])

export type UserScalarFieldEnum = z.infer<typeof UserScalarFieldEnumSchema>;