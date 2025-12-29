import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'
import { User } from '@prisma/client'
import { isEmpty } from 'es-toolkit/compat'

import { DbService } from '../db/db.service'
import { TeamTypeEnum } from '../shared/zod'
import { TeamService } from '../team/team.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly dbService: DbService,
    private readonly jwtService: JwtService,
    private readonly teamService: TeamService,
  ) {}

  public async validateOAuthLogin(
    provider: string,
    providerId: string,
    email: string,
    name?: string,
    avatar?: string,
  ) {
    const oauthAccount = await this.dbService.oAuthAccount.findUnique({
      where: {
        provider_providerId: {
          provider,
          providerId,
        },
      },
      include: {
        user: true,
      },
    })

    if (oauthAccount) {
      return oauthAccount.user
    }

    const user = await this.dbService.user.findUnique({
      where: { email },
    })

    if (user) {
      await this.dbService.oAuthAccount.create({
        data: {
          provider,
          providerId,
          email,
          name,
          avatar,
          userId: user.id,
        },
      })
      return user
    }

    return this.dbService.user.create({
      data: {
        email,
        name,
        avatar,
        oauthAccount: {
          create: {
            provider,
            providerId,
            email,
            name,
            avatar,
          },
        },
      },
    })
  }

  public async ensurePersonalTeam(user: User): Promise<void> {
    const teams = await this.teamService.getUserTeams({ userId: user.id })

    if (isEmpty(teams)) {
      await this.teamService.createTeam({
        name: `${user.name}'s Team`,
        description: 'This is your personal team.',
        creatorId: user.id,
        type: TeamTypeEnum.Personal,
      })
    }
  }

  public async login(
    user: Awaited<ReturnType<AuthService['validateOAuthLogin']>>,
  ) {
    const payload = { email: user.email, sub: user.id }
    return {
      access_token: this.jwtService.sign(payload),
    }
  }

  public async getUserById(userId: string) {
    return this.dbService.user.findUnique({
      where: { id: userId },
    })
  }
}
