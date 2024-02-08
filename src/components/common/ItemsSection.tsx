'use client'

import { useMemo } from 'react'
import { Triangle } from 'react-loader-spinner'
import useGamesQuery from '@api/useGamesQuery'
import useProjectsQuery from '@api/useProjectsQuery'
import { ConnectionError } from '@components/common/ConnectionError'
import { GameItem } from '@components/games/GameItem'
import { ProjectItem } from '@components/projects/ProjectItem'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'
import { IGames } from '@models/games.model'
import { IProject } from '@models/projects.model'
import { isEmpty, isNil } from 'lodash'

interface IProps {
  title: string
  description: string
  data: Array<IGames | IProject>
  isLoading: boolean
  error: string | null
  isGamesSection?: boolean
}

export function ItemsSection({
  title,
  description,
  data,
  isLoading,
  error,
  isGamesSection = false,
}: IProps) {
  const { theme } = useThemeContext()
  const { t } = useTranslation()
  const spinnerColor = useMemo(
    () => (theme === ThemeTypesEnum.LIGHT ? '#2b2b2b' : '#f4f4f4'),
    [theme],
  )
  const LoaderComponent = useMemo(
    () => (
      <div className={'w-full flex justify-center mt-8'}>
        <Triangle
          visible={true}
          height={'50'}
          width={'50'}
          color={spinnerColor}
          ariaLabel={'triangle-loading'}
          wrapperClass={'loader'}
        />
      </div>
    ),
    [spinnerColor],
  )

  return (
    <div className={'w-full mt-24'}>
      <h1 className={'pb-4 title text-center title-2'}>{title}</h1>
      <p className={'text-center description'}>{description}</p>
      {isLoading && LoaderComponent}
      {!isLoading && !isNil(error) ? (
        <ConnectionError error={error} />
      ) : (
        <div
          className={
            'w-full md:max-w-[70vw] mx-auto flex sm:grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8'
          }
        >
          {!isNil(data) &&
            !isEmpty(data) &&
            data.map((resource) =>
              isGamesSection ? (
                <GameItem key={(resource as IGames).appid} game={resource as IGames} />
              ) : (
                <ProjectItem
                  key={(resource as IProject).id}
                  project={resource as IProject}
                />
              ),
            )}
        </div>
      )}
      {!isLoading && isEmpty(data) && isNil(error) && (
        <div className={'flex justify-center'}>
          <p className={'inline-block px-8 py-4 coming-soon-text'}>{t('comingSoon')}</p>
        </div>
      )}
    </div>
  )
}
