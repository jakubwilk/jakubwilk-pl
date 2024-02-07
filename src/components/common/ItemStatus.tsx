'use client'

import { useTranslation } from '@hooks/useTranslation'

interface IProps {
  text: string
  isActive: boolean
}

export function ItemStatus({ text, isActive }: IProps) {
  const { t } = useTranslation()

  return (
    <span
      className={`${
        isActive ? 'status-active' : 'status-inactive'
      } item-stats-status inline-block px-2 py-1 mt-2`}
    >
      {t(text)}
    </span>
  )
}
