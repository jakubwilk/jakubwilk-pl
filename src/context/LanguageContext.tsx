'use client'

import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { LanguageTypesEnum } from '@enums/LanguageEnum'
import { LanguageContextType } from '@models/language.model'

export const LanguageContext = createContext<LanguageContextType>({
  lang: LanguageTypesEnum.POLAND,
  handleSetLanguage: () => {},
})

interface IProps {
  children: ReactNode
}

export const LanguageContextProvider = ({ children }: IProps) => {
  const [lang, setLang] = useState<LanguageTypesEnum>(LanguageTypesEnum.POLAND)

  const handleSetLanguage = useCallback((lang: LanguageTypesEnum) => {
    setLang(lang)
  }, [])

  const contextValues: LanguageContextType = useMemo(
    () => ({
      lang,
      handleSetLanguage,
    }),
    [handleSetLanguage, lang],
  )

  return (
    <LanguageContext.Provider value={contextValues}>{children}</LanguageContext.Provider>
  )
}
