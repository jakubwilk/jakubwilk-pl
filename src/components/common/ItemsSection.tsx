'use client'

import { useMemo } from 'react'
import { Triangle } from 'react-loader-spinner'
import { ConnectionError } from '@components/common/ConnectionError'
import { GameItem } from '@components/games/GameItem'
import { ProjectItem } from '@components/projects/ProjectItem'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'
import { IGames } from '@models/games.model'
import { IProject } from '@models/projects.model'
import { isEmpty, isNil } from 'lodash'

interface IProps<T extends Array<IGames | IProject>> {
  title: string
  description: string
  data: T
  errorText: string | null
  isDataLoading: boolean
  hasGames: boolean
}

export function ItemsSection<T extends Array<IGames | IProject>>({
  title,
  description,
  data,
  errorText,
  isDataLoading,
  hasGames = false,
}: IProps<T>) {
  const { theme } = useThemeContext()
  const { t } = useTranslation()

  const spinnerColor = useMemo(
    () => (theme === ThemeTypesEnum.LIGHT ? '#2b2b2b' : '#f4f4f4'),
    [theme],
  )

  return (
    <div className={'w-full mt-24'}>
      <h1 className={'pb-4 title text-center title-2'}>{title}</h1>
      <p className={'text-center description'}>{description}</p>
      {isDataLoading ? (
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
      ) : !isNil(errorText) ? (
        <ConnectionError error={errorText} />
      ) : (
        <div
          className={
            'w-full md:max-w-[70vw] mx-auto flex sm:grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8'
          }
        >
          {data.map((resource) =>
            hasGames ? (
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
      {isEmpty(data) && (
        <p className={'text-center coming-soon-text'}>{t('comingSoon')}</p>
      )}
    </div>
  )
}
