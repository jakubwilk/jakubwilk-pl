'use client'

import { Fragment } from 'react'
import SocialsGrid from '@components/SocialsGrid'
import { useTranslation } from '@hooks/useTranslation'

export function ProfileSocials() {
  const { t } = useTranslation()

  return (
    <Fragment>
      <h1 className={'pb-4 title'}>
        {`👋 ${t('greetings')} `}
        <span>{t('name')}</span>
      </h1>
      <p className={'description'}>{t('description')}</p>
      <SocialsGrid />
    </Fragment>
  )
}
