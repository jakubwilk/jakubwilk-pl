'use client'

import { useCallback } from 'react'
import { localeConfig } from '@config/locale'
import { LanguageTypesEnum } from '@enums/LanguageEnum'
import { useLanguageContext } from '@hooks/useLanguageContext'

type TTranslation = keyof typeof localeConfig

export const useTranslation = () => {
  const { lang } = useLanguageContext()

  const t = useCallback(
    (translation: TTranslation) => {
      const langPrefix =
        lang === LanguageTypesEnum.POLAND
          ? localeConfig[LanguageTypesEnum.POLAND]
          : localeConfig[LanguageTypesEnum.ENGLAND]

      return langPrefix[translation]
    },
    [lang],
  )

  return { t }
}
