import * as z from 'zod'

export const TeamTypeEnum = { Personal: 'Personal', Shared: 'Shared' } as const
export const TeamTypeEnumSchema = z.nativeEnum(TeamTypeEnum)
export const MembershipRoleEnum = { Admin: 'Admin', Member: 'Member' } as const
export const MembershipRoleEnumSchema = z.nativeEnum(MembershipRoleEnum)
