import {
  Controller,
  Get,
  Req,
  Res,
  SetMetadata,
  UseGuards,
} from '@nestjs/common'
import type { User } from '@prisma/client'
import type { Request, Response } from 'express'

import { AuthService } from './auth.service'
import { CurrentUser } from './decorators/current-user.decorator'
import { GoogleAuthGuard } from './guards/google-auth.guard'
import { JwtAuthGuard } from './guards/jwt-auth.guard'
import { YandexAuthGuard } from './guards/yandex-auth.guard'
import { OAuthUserInfo } from './strategies/google.strategy'

@Controller('auth/')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google')
  @SetMetadata('isPublic', true)
  @UseGuards(GoogleAuthGuard)
  googleLogin() {}

  @Get('google/callback')
  @SetMetadata('isPublic', true)
  @UseGuards(GoogleAuthGuard)
  async googleLoginCallback(@Req() req: Request, @Res() res: Response) {
    const { providerId, email, name, avatar } = req.user as OAuthUserInfo
    const user = await this.authService.validateOAuthLogin(
      'google',
      providerId,
      email,
      name,
      avatar,
    )

    await this.authService.ensurePersonalTeam(user)
    const token = await this.authService.login(user)

    res.redirect(
      `${process.env.FRONTEND_URL}/auth/callback/?token=${token.access_token}`,
    )
  }

  @Get('yandex')
  @SetMetadata('isPublic', true)
  @UseGuards(YandexAuthGuard)
  yandexLogin() {}

  @Get('yandex/callback')
  @SetMetadata('isPublic', true)
  @UseGuards(YandexAuthGuard)
  async yandexLoginCallback(@Req() req: Request, @Res() res: Response) {
    const { providerId, email, name, avatar } = req.user as OAuthUserInfo
    const user = await this.authService.validateOAuthLogin(
      'yandex',
      providerId,
      email,
      name,
      avatar,
    )

    await this.authService.ensurePersonalTeam(user)
    const token = await this.authService.login(user)

    res.redirect(
      `${process.env.FRONTEND_URL}/auth/callback/?token=${token.access_token}`,
    )
  }

  @Get('me')
  @UseGuards(JwtAuthGuard)
  async getProfile(@CurrentUser() user: User) {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
    }
  }
}
