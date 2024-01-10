'use client'

import { useEffect, useMemo, useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import { GameItem } from '@components/games/GameItem'
import { GamesError } from '@components/games/GamesError'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'
import { IGames, IGamesResponse } from '@models/games.models'

export function GamesSection() {
  const { t } = useTranslation()
  const { theme } = useThemeContext()
  const [data, setData] = useState<Array<IGames>>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const spinnerColor = useMemo(
    () => (theme === ThemeTypesEnum.LIGHT ? '#2b2b2b' : '#f4f4f4'),
    [theme],
  )

  useEffect(() => {
    fetch('https://proxy-jakubwilk.underwolfstudio.com/games/ids=1245620', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response: IGamesResponse) => {
        setData(response.data)
        setIsLoading(false)
      })
      .catch(() => {
        setError(t('gamesSectionRequestError'))
        setIsLoading(false)
      })

    return () => {
      setIsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className={'mt-24'}>
      <h1 className={'pb-4 title text-center title-2'}>{`🎉 ${t(
        'gamesSectionTitle',
      )}`}</h1>
      <p className={'text-center description'}>{t('gamesSectionDescription')}</p>
      {isLoading ? (
        <div className={'w-full flex justify-center mt-8'}>
          <Triangle
            visible={true}
            height={'50'}
            width={'50'}
            color={spinnerColor}
            ariaLabel={'triangle-loading'}
            wrapperClass={'games-loader'}
          />
        </div>
      ) : error ? (
        <GamesError error={error} />
      ) : (
        <div className={'flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8'}>
          {data.map((game) => (
            <GameItem key={game.appid} game={game} />
          ))}
        </div>
      )}
    </div>
  )
}
