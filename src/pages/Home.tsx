'use client'
import { useEffect } from 'react'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'

import Header from '@/components/Header'

export default function HomePage() {
  const { theme } = useThemeContext()

  console.log('theme', theme)

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
    <div className={'container mx-auto'}>
      <Header />
      <main className={'flex items-center justify-center min-h-screen'}>
        <h1>{'Comming soon'}</h1>
      </main>
    </div>
  )
}
