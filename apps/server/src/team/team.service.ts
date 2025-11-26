import { Injectable } from '@nestjs/common'

import { DbService } from '../db/db.service'
import { JoinRequestCreateType, TeamCreateType } from '../shared/zod'

@Injectable()
export class TeamService {
  constructor(private readonly dbService: DbService) {}

  public createTeam(data: TeamCreateType) {
    return this.dbService.team.create({
      data,
    })
  }

  public requestToJoin(data: JoinRequestCreateType) {
    return this.dbService.joinRequest.create({
      data,
    })
  }
}
