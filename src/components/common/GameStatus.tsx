'use client'

import { useTranslation } from '@hooks/useTranslation'

interface IProps {
  text: string
  isActive: boolean
}

export function GameStatus({ text, isActive }: IProps) {
  const { t } = useTranslation()

  return (
    <span
      className={`${
        isActive ? 'status-active' : 'status-inactive'
      } game-stats-status inline-block px-2 py-1 mt-2`}
    >
      {t(text)}
    </span>
  )
}
