import {
  atom,
  onConnect,
  reatomAsync,
  withCache,
  withDataAtom,
  withStatusesAtom,
} from '@reatom/framework'
import { withLocalStorage } from '@reatom/persist-web-storage'
import { isEmpty } from 'es-toolkit/compat'

import { apiClient } from '~shared/api'

export const teamsList = reatomAsync(async (ctx) => {
  const teams = await apiClient.TeamController.getUserTeams()
  const [team] = teams

  if (!ctx.get(activeTeamAtom)) {
    activeTeamIdAtom(ctx, team.id)
  }

  return teams
}).pipe(withDataAtom(), withStatusesAtom(), withCache())
onConnect(teamsList, teamsList)

const activeTeamIdAtom = atom<string | undefined>(undefined).pipe(
  withLocalStorage('active-team-id'),
)
export const activeTeamAtom = atom((ctx) => {
  const id = ctx.spy(activeTeamIdAtom)
  const teams = ctx.spy(teamsList.dataAtom)

  if (!teams || isEmpty(teams)) {
    return undefined
  }

  return id ? teams.find((team) => team.id === id) : teams[0]
})
