'use client'
import { useEffect } from 'react'
import { GamesSection } from '@components/games/GamesSection'
import Header from '@components/header/Header'
import { ProfileSocials } from '@components/ProfileSocials'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'

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
      <main
        className={'flex flex-col items-center justify-center min-h-screen py-24 px-4'}
      >
        <ProfileSocials />
        <GamesSection />
      </main>
    </div>
  )
}
