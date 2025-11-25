import { Injectable } from '@nestjs/common'
import { JwtService } from '@nestjs/jwt'

import { DbService } from '../db/db.service'

@Injectable()
export class AuthService {
  constructor(
    private readonly dbService: DbService,
    private readonly jwtService: JwtService,
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

    let user = await this.dbService.user.findUnique({
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

    user = await this.dbService.user.create({
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

    return user
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
