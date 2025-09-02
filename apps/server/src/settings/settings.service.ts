import { BadRequestException, Injectable } from '@nestjs/common'
import bcrypt from 'bcrypt'
import { omit } from 'es-toolkit'

import { DbService } from '../db/db.service'
import { SettingsCreatePayload, SettingsUpdatePayload } from './settings.types'

@Injectable()
export class SettingsService {
  constructor(private readonly dbService: DbService) {}

  public async isFirstSetup() {
    const record = await this.dbService.settings.findFirst()

    return {
      isFirstSetup: !record,
    }
  }

  public async createInitialSettings(data: SettingsCreatePayload) {
    const record = await this.dbService.settings.findFirst()

    if (record) {
      throw new BadRequestException('Settings record should exist')
    }

    const hash = await bcrypt.hash(data.password, 10)

    await this.dbService.settings.create({
      data: {
        ...omit(data, ['password']),
        passwordHash: hash,
      },
    })
  }

  public async updateSettings(data: SettingsUpdatePayload) {
    const record = await this.dbService.settings.findFirst()

    if (!record) {
      throw new BadRequestException('Settings record should exist')
    }

    await this.dbService.settings.update({
      where: { id: record.id },
      data,
    })
  }
}
