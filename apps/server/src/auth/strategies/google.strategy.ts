import { Injectable } from '@nestjs/common'
import { PassportStrategy } from '@nestjs/passport'
import { Profile } from 'passport'
import { Strategy } from 'passport-google-oauth20'

export interface OAuthUserInfo {
  providerId: string
  email: string
  name: string
  avatar?: string
}

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      callbackURL: `${process.env.BACKEND_URL}/api/auth/google/callback`,
      scope: ['email', 'profile'],
    })
  }

  public validate(
    _accessToken: string,
    _refreshToken: string,
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
