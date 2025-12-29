import { Module } from '@nestjs/common'

import { TeamController } from './team.controller'
import { TeamService } from './team.service'

@Module({
  providers: [TeamService],
  exports: [TeamService],
  controllers: [TeamController],
})
export class TeamModule {}
