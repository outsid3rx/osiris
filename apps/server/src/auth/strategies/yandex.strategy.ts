import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Profile } from 'passport'
import { Strategy } from 'passport-yandex'

export interface OAuthUserInfo {
  providerId: string
  email: string
  name: string
  avatar?: string
}

@Injectable()
export class YandexStrategy extends PassportStrategy(Strategy, 'yandex') {
  constructor() {
    super({
      clientID: process.env.YANDEX_CLIENT_ID!,
      clientSecret: process.env.YANDEX_CLIENT_SECRET!,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/yandex/callback`,
    })
  }

  public validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
  ): OAuthUserInfo {
    return {
      providerId: profile.id,
      email: profile.emails![0].value,
      name: profile.displayName,
      avatar: profile.photos![0].value,
    }
  }
}
