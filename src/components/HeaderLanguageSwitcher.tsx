'use client'

import { useCallback, useMemo } from 'react'
import { LanguageTypesEnum } from '@enums/LanguageEnum'
import { useLanguageContext } from '@hooks/useLanguageContext'
import { clsx } from 'clsx'

export default function HeaderLanguageSwitcher() {
  const { lang, handleSetLanguage } = useLanguageContext()

  const isPolishLanguage = useMemo(() => lang === LanguageTypesEnum.POLAND, [lang])

  const handleLanguage = useCallback(
    (lang: LanguageTypesEnum) => {
      handleSetLanguage(lang)
    },
    [handleSetLanguage],
  )

  return (
    <div className={'flex items-center'}>
      <button
        className={clsx('w-[50px] h-[50px]', isPolishLanguage && 'button-polish-active')}
        onClick={() => handleLanguage(LanguageTypesEnum.POLAND)}
        title={'Zmień na tryb ciemny'}
      >
        {'🇵🇱 PL'}
      </button>
      <button
        className={clsx(
          'w-[50px] h-[50px]',
          !isPolishLanguage && 'button-english-active',
        )}
        onClick={() => handleLanguage(LanguageTypesEnum.ENGLAND)}
        title={'Zmień na tryb jasny'}
      >
        {'🇬🇧 EN'}
      </button>
    </div>
  )
}
