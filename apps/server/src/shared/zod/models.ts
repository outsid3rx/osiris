import * as z from 'zod'

export const UserModelSchema = z.object({
  id: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  avatar: z.string().nullable(),
})
export const UserModelCreateSchema = UserModelSchema.omit({ id: true })
export const UserModelUpdateSchema = UserModelCreateSchema.partial()
export type UserType = z.infer<typeof UserModelSchema>
export type UserCreateType = z.infer<typeof UserModelCreateSchema>
export type UserUpdateType = z.infer<typeof UserModelUpdateSchema>
export const TeamModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  description: z.string().nullable(),
})
export const TeamModelCreateSchema = TeamModelSchema.omit({ id: true })
export const TeamModelUpdateSchema = TeamModelCreateSchema.partial()
export type TeamType = z.infer<typeof TeamModelSchema>
export type TeamCreateType = z.infer<typeof TeamModelCreateSchema>
export type TeamUpdateType = z.infer<typeof TeamModelUpdateSchema>
export const TeamMemberModelSchema = z.object({
  id: z.string(),
  userId: z.string(),
  teamId: z.string(),
})
export const TeamMemberModelCreateSchema = TeamMemberModelSchema.omit({
  id: true,
})
export const TeamMemberModelUpdateSchema = TeamMemberModelCreateSchema.partial()
export type TeamMemberType = z.infer<typeof TeamMemberModelSchema>
export type TeamMemberCreateType = z.infer<typeof TeamMemberModelCreateSchema>
export type TeamMemberUpdateType = z.infer<typeof TeamMemberModelUpdateSchema>
export const JoinRequestModelSchema = z.object({
  id: z.string(),
  userId: z.string(),
  teamId: z.string(),
})
export const JoinRequestModelCreateSchema = JoinRequestModelSchema.omit({
  id: true,
})
export const JoinRequestModelUpdateSchema =
  JoinRequestModelCreateSchema.partial()
export type JoinRequestType = z.infer<typeof JoinRequestModelSchema>
export type JoinRequestCreateType = z.infer<typeof JoinRequestModelCreateSchema>
export type JoinRequestUpdateType = z.infer<typeof JoinRequestModelUpdateSchema>
export const OAuthAccountModelSchema = z.object({
  id: z.string(),
  provider: z.string(),
  providerId: z.string(),
  email: z.string(),
  name: z.string().nullable(),
  avatar: z.string().nullable(),
  userId: z.string(),
})
export const OAuthAccountModelCreateSchema = OAuthAccountModelSchema.omit({
  id: true,
})
export const OAuthAccountModelUpdateSchema =
  OAuthAccountModelCreateSchema.partial()
export type OAuthAccountType = z.infer<typeof OAuthAccountModelSchema>
export type OAuthAccountCreateType = z.infer<
  typeof OAuthAccountModelCreateSchema
>
export type OAuthAccountUpdateType = z.infer<
  typeof OAuthAccountModelUpdateSchema
>
export const WorkflowModelSchema = z.object({
  id: z.string(),
  name: z.string(),
  authorId: z.string(),
  teamId: z.string(),
})
export const WorkflowModelCreateSchema = WorkflowModelSchema.omit({ id: true })
export const WorkflowModelUpdateSchema = WorkflowModelCreateSchema.partial()
export type WorkflowType = z.infer<typeof WorkflowModelSchema>
export type WorkflowCreateType = z.infer<typeof WorkflowModelCreateSchema>
export type WorkflowUpdateType = z.infer<typeof WorkflowModelUpdateSchema>
