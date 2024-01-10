import { useMemo } from 'react'
import { IGames } from '@models/games.models'

interface IProps {
  game: IGames
}

export function GameItem({ game }: IProps) {
  const getAllHours = useMemo(() => (game.playtime_forever / 60).toFixed(2), [game])

  return (
    <div className={'p-4 game-item'}>
      <h3>{game.name}</h3>
      <ul>
        <li>
          <span>{'Czas ogólny: '}</span>
          {`${getAllHours} godzin`}
        </li>
        <li>
          <span>{'Śmierci: '}</span>
          {game.deaths}
        </li>
      </ul>
    </div>
  )
}
