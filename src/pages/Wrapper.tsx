'use client'
import { ReactNode } from 'react'
import { LanguageContextProvider } from '@context/LanguageContext'
import { ThemeContextProvider } from '@context/ThemeContext'

interface IProps {
  children: ReactNode
}

export default function Wrapper({ children }: IProps) {
  return (
    <LanguageContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </LanguageContextProvider>
  )
}
