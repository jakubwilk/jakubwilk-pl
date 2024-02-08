'use client'
import { useEffect } from 'react'
import useGamesQuery from '@api/useGamesQuery'
import useProjectsQuery from '@api/useProjectsQuery'
import { ItemsSection } from '@components/common/ItemsSection'
import Header from '@components/header/Header'
import { ProfileSocials } from '@components/ProfileSocials'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'

export default function HomePage() {
  const { t } = useTranslation()
  const { theme } = useThemeContext()
  const {
    data: projects,
    isLoading: isProjectsLoading,
    error: projectsError,
  } = useProjectsQuery()
  const gamesIds = '1245620&485510'
  const {
    data: games,
    isLoading: isGamesLoading,
    error: gamesError,
  } = useGamesQuery(gamesIds)

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
        <ItemsSection
          title={`💻 ${t('projectsSectionTitle')}`}
          description={t('projectsSectionDescription')}
          data={projects}
          isLoading={isProjectsLoading}
          error={projectsError}
        />
        <ItemsSection
          title={`🎉 ${t('gamesSectionTitle')}`}
          description={t('gamesSectionDescription')}
          data={games}
          isLoading={isGamesLoading}
          error={gamesError}
          isGamesSection
        />
      </main>
    </div>
  )
}
