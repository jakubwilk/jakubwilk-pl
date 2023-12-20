'use client'
import { useEffect } from 'react'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'

import Header from '@/components/Header'

export default function HomePage() {
  const { theme } = useThemeContext()

  useEffect(() => {
    if (theme === ThemeTypesEnum.LIGHT) {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
    } else {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    }
  }, [theme])

  return (
    <div className={'container mx-auto relative'}>
      <Header />
      <main className={'flex flex-col items-center justify-center min-h-screen px-4'}>
        <h1>{'👋 Cześć, jestem Jakub'}</h1>
        <p>{'Jestem programistą Front-End'}</p>
      </main>
    </div>
  )
}
