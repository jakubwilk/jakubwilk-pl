'use client'

import { useCallback, useMemo } from 'react'
import { LanguageTypesEnum } from '@enums/LanguageEnum'
import { useLanguageContext } from '@hooks/useLanguageContext'
import { useTranslation } from '@hooks/useTranslation'
import { clsx } from 'clsx'

export default function HeaderLanguageSwitcher() {
  const { t } = useTranslation()
  const { lang, handleSetLanguage } = useLanguageContext()

  const isPolishLanguage = useMemo(() => lang === LanguageTypesEnum.POLAND, [lang])

  const handleLanguage = useCallback(
    (lang: LanguageTypesEnum) => {
      handleSetLanguage(lang)
      if (typeof window !== 'undefined') {
        localStorage.setItem('lang', lang)
      }
    },
    [handleSetLanguage],
  )

  return (
    <div className={'flex items-center'}>
      <button
        className={clsx(
          'w-[50px] h-[50px] button-language',
          isPolishLanguage && 'button-polish-active',
        )}
        onClick={() => handleLanguage(LanguageTypesEnum.POLAND)}
        title={t('languagePolish')}
      >
        {'🇵🇱'}
      </button>
      <button
        className={clsx(
          'w-[50px] h-[50px] button-language',
          !isPolishLanguage && 'button-english-active',
        )}
        onClick={() => handleLanguage(LanguageTypesEnum.ENGLAND)}
        title={t('languageEnglish')}
      >
        {'🇬🇧'}
      </button>
    </div>
  )
}
