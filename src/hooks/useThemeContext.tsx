'use client'

import { useContext } from 'react'
import { ThemeContext } from '@context/ThemeContext'

export const useThemeContext = () => {
  const { theme, handleSetTheme } = useContext(ThemeContext)
  return { theme, handleSetTheme }
}
