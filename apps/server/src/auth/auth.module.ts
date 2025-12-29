import { Module } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'

import { TeamModule } from '../team/team.module'
import { AuthController } from './auth.controller'
import { AuthService } from './auth.service'
import { GoogleStrategy } from './strategies/google.strategy'
import { JwtStrategy } from './strategies/jwt.strategy'
import { YandexStrategy } from './strategies/yandex.strategy'

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1d' },
    }),
    TeamModule,
  ],
  providers: [AuthService, GoogleStrategy, YandexStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
