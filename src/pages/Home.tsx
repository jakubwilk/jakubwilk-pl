'use client'
import { useEffect } from 'react'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'

import Header from '@/components/Header'

export default function HomePage() {
  const { theme } = useThemeContext()
  const { t } = useTranslation()

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
        <h1 className={'pb-4 title'}>
          {`👋 ${t('greetings')} `}
          <span>{t('name')}</span>
        </h1>
        <p className={'description'}>{t('description')}</p>
      </main>
    </div>
  )
}
