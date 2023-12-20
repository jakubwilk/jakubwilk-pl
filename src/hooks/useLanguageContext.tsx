'use client'

import { useContext } from 'react'
import { LanguageContext } from '@context/LanguageContext'

export const useLanguageContext = () => {
  const { lang, handleSetLanguage } = useContext(LanguageContext)
  return { lang, handleSetLanguage }
}
