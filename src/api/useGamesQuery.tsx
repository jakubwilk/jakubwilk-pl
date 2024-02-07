'use client'

import { QueryKeyEnum } from '@api/api.keys'
import { QueryOptions, useQuery } from '@tanstack/react-query'

const getGames = async (gamesIds: string) => {
  const response = await fetch(
    `https://proxy-jakubwilk.underwolfstudio.com/games/ids=${gamesIds}`,
    {
      method: 'GET',
    },
  )
  const { data } = await response.json()

  return data
}

const useGamesQuery = (gamesIds: string, options?: QueryOptions) => {
  return useQuery({
    queryKey: [QueryKeyEnum.GET_GAMES, gamesIds],
    queryFn: () => getGames(gamesIds),
    ...options,
  })
}

export default useGamesQuery
