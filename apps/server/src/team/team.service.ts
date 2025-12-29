import { Injectable } from '@nestjs/common'
import { NotFoundError } from 'rxjs'

import { DbService } from '../db/db.service'
import {
  JoinRequestCreateType,
  MembershipRoleEnum,
  TeamCreateType,
} from '../shared/zod'

@Injectable()
export class TeamService {
  constructor(private readonly dbService: DbService) {}

  public getUserTeams({
    userId,
    includeRequests = false,
  }: {
    userId: string
    includeRequests?: boolean
  }) {
    return this.dbService.team.findMany({
      where: { teamMembers: { some: { userId } } },
      include: {
        workflows: true,
        creator: true,
        joinRequests: includeRequests,
      },
    })
  }

  public createTeam(data: TeamCreateType) {
    return this.dbService.team.create({
      data: {
        ...data,
        teamMembers: {
          create: {
            userId: data.creatorId,
            role: MembershipRoleEnum.Admin,
          },
        },
      },
      include: {
        teamMembers: true,
      },
    })
  }

  public requestToJoin(data: JoinRequestCreateType) {
    return this.dbService.joinRequest.create({
      data,
    })
  }
}
