'use client'
import { useEffect, useState } from 'react'
import { ItemsSection } from '@components/common/ItemsSection'
import Header from '@components/header/Header'
import { ProfileSocials } from '@components/ProfileSocials'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useLanguageContext } from '@hooks/useLanguageContext'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'
import { IGames, IGamesResponse } from '@models/games.model'
import { IProject, IProjectsResponse } from '@models/projects.model'
import { isNil } from 'lodash'

export default function HomePage() {
  const { t } = useTranslation()
  const { theme } = useThemeContext()
  const { lang } = useLanguageContext()
  const [games, setGames] = useState<Array<IGames>>([])
  const [isGamesLoading, setIsGamesLoading] = useState(true)
  const [gamesError, setGamesError] = useState<string | null>(null)
  const [projects, setProjects] = useState<Array<IProject>>([])
  const [isProjectsLoading, setIsProjectsLoading] = useState(true)
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
    const gamesIds = '1245620&485510'

    fetch(`https://proxy-jakubwilk.underwolfstudio.com/games/ids=${gamesIds}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response: IGamesResponse) => {
        setGames(response.data)
        setIsGamesLoading(false)
      })
      .catch(() => {
        setGamesError(t('apiRequestError'))
        setIsGamesLoading(false)
      })

    return () => {
      setIsGamesLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    fetch(`https://proxy-jakubwilk.underwolfstudio.com/projects`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((response: IProjectsResponse) => {
        setProjects(response.data)
        setIsProjectsLoading(false)
      })
      .catch(() => {
        setProjectsError(t('apiRequestError'))
        setIsProjectsLoading(false)
      })

    return () => {
      setIsProjectsLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!isNil(gamesError)) {
      setGamesError(t('apiRequestError'))
    }

    if (!isNil(projectsError)) {
      setProjectsError(t('apiRequestError'))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

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
          data={projects}
          isDataLoading={isProjectsLoading}
          hasGames
        />
        <ItemsSection
          title={`🎉 ${t('gamesSectionTitle')}`}
          description={t('gamesSectionDescription')}
          errorText={gamesError}
          data={games}
          isDataLoading={isGamesLoading}
          hasGames
        />
      </main>
    </div>
  )
}
