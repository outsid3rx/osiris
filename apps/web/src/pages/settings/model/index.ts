import { atom } from '@reatom/framework'

export const enum ESettingsPage {
  Local = 'local',
  Password = 'password',
}

export const settingsPageAtom = atom<ESettingsPage>(ESettingsPage.Local)
