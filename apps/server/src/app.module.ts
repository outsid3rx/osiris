import { Module } from '@nestjs/common'

import { DbModule } from './db/db.module'
import { SettingsModule } from './settings/settings.module'

@Module({
  imports: [SettingsModule, DbModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
