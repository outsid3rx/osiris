import { Controller, Get } from '@nestjs/common'
import type { User } from '@prisma/client'

import { CurrentUser } from '../auth/decorators/current-user.decorator'
import { TeamService } from './team.service'

@Controller('team/')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Get('')
  public getUserTeams(@CurrentUser() user: User) {
    return this.teamService.getUserTeams({ userId: user.id })
  }
}
