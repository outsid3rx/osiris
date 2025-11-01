import { Body, Controller, Get, Patch, Post } from '@nestjs/common'

import { SettingsService } from './settings.service'
import type {
  SettingsCreatePayload,
  SettingsUpdatePayload,
} from './settings.types'

@Controller('/settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('/check')
  isFirstSetup() {
    return this.settingsService.isFirstSetup()
  }

  @Post()
  async initSettings(@Body() body: SettingsCreatePayload) {
    await this.settingsService.createInitialSettings(body)

    return { success: true }
  }

  @Patch()
  updateSettings(@Body() body: SettingsUpdatePayload) {
    return this.settingsService.updateSettings(body)
  }
}
