'use client'

import { useMemo } from 'react'
import { ItemStatus } from '@components/common/ItemStatus'
import { GameSingleStat } from '@components/games/GameSingleStat'
import { useTranslation } from '@hooks/useTranslation'
import { IGames } from '@models/games.model'
import Image from 'next/image'

interface IProps {
  game: IGames
}

export function GameItem({ game }: IProps) {
  const { t } = useTranslation()

  const getAllHours = useMemo(() => {
    const timeInMinutes = game.playtime_forever
    return `${Math.floor(timeInMinutes / 60)}:${timeInMinutes % 60}`
  }, [game])

  return (
    <div className={'w-full p-4 game-item'}>
      <h3 className={'mb-4 game-title'}>{game.name}</h3>
      <div className={'flex items-center justify-between gap-4'}>
        <div className={'flex flex-col'}>
          <GameSingleStat title={t('gamesSectionStatsAllTime')} value={getAllHours} />
          <GameSingleStat title={t('gamesSectionStatsDeaths')} value={game.deaths} />
        </div>
        <Image src={game.image} alt={game.name} width={64} height={64} />
      </div>
      <ItemStatus text={game.statusText} isActive={game.isActive} />
    </div>
  )
}
