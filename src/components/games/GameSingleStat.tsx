'use client'

interface IProps {
  title: string
  value: string | number
}

export function GameSingleStat({ title, value }: IProps) {
  return (
    <div className={'flex items-center mt-1'}>
      <span className={'game-stats-title mr-1'}>{title}</span>
      <span className={'game-stats-value mr-1'}>{value}</span>
    </div>
  )
}
