'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@hooks/useTranslation'
import { IGames } from '@models/games.model'

const getGames = async (gamesIds: string) => {
  const response = await fetch(
    `https://proxy-jakubwilk.underwolfstudio.com/games/ids=${gamesIds}`,
    {
      method: 'GET',
    },
  )
  return await response.json()
}

const useGamesQuery = (gamesIds: string) => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Array<IGames>>([])
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    getGames(gamesIds)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => setError(t('apiRequestError')))
      .finally(() => setIsLoading(false))
  }, [gamesIds, t])

  return { data, isLoading, error }
}

export default useGamesQuery
