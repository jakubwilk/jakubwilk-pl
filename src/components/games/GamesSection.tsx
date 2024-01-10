'use client'

import { useTranslation } from '@hooks/useTranslation'

export function GamesSection() {
  const { t } = useTranslation()

  return (
    <div className={'mt-24'}>
      <h1 className={'pb-4 title text-center title-2'}>{`🎉 ${t(
        'gamesSectionTitle',
      )}`}</h1>
      <p className={'description'}>{t('gamesSectionDescription')}</p>
    </div>
  )
}
