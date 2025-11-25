import { atom } from '@reatom/framework'

export const enum EInitialPage {
  Local = 'local',
  Auth = 'auth',
}

export const initialPageAtom = atom<EInitialPage>(EInitialPage.Local)
