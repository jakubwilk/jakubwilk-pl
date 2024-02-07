'use client'
import { useEffect, useState } from 'react'
import useGamesQuery from '@api/useGamesQuery'
import useProjectsQuery from '@api/useProjectsQuery'
import { ItemsSection } from '@components/common/ItemsSection'
import Header from '@components/header/Header'
import { ProfileSocials } from '@components/ProfileSocials'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useLanguageContext } from '@hooks/useLanguageContext'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'
import { IGames } from '@models/games.model'
import { IProject } from '@models/projects.model'

export default function HomePage() {
  const { t } = useTranslation()
  const { theme } = useThemeContext()
  const { lang } = useLanguageContext()
  const {
    data: projects,
    isLoading: isProjectsLoading,
    isError: isProjectsError,
  } = useProjectsQuery()
  const gamesIds = '1245620&485510'
  const {
    data: games,
    isLoading: isGamesLoading,
    isError: isGamesError,
  } = useGamesQuery(gamesIds)
  const [gamesError, setGamesError] = useState<string | null>(null)
  const [projectsError, setProjectsError] = useState<string | null>(null)

  useEffect(() => {
    if (theme === ThemeTypesEnum.LIGHT) {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
    } else {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    }
  }, [theme])

  useEffect(() => {
    setGamesError(isGamesError ? t('apiRequestError') : null)
    setProjectsError(isProjectsError ? t('apiRequestError') : null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, isProjectsError])

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
          errorText={projectsError}
          data={projects as Array<IProject>}
          isDataLoading={isProjectsLoading}
          hasGames
        />
        <ItemsSection
          title={`🎉 ${t('gamesSectionTitle')}`}
          description={t('gamesSectionDescription')}
          errorText={gamesError}
          data={games as Array<IGames>}
          isDataLoading={isGamesLoading}
          hasGames
        />
      </main>
    </div>
  )
}
