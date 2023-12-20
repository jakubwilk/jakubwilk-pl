'use client'

import { useMemo } from 'react'
import { GithubIcon } from '@components/icons/GithubIcon'
import { LinkedinIcon } from '@components/icons/LinkedinIcon'
import SocialsGridItem from '@components/SocialsGridItem'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'

export default function SocialsGrid() {
  const { theme } = useThemeContext()
  const { t } = useTranslation()

  const isLightTheme = useMemo(() => theme === ThemeTypesEnum.LIGHT, [theme])
  const strokeColor = useMemo(
    () => (isLightTheme ? '#2b2b2b' : '#f4f4f4'),
    [isLightTheme],
  )

  return (
    <div className={'flex flex-col md:flex-row gap-8 pt-24'}>
      <SocialsGridItem
        name={t('github')}
        description={t('githubDescription')}
        title={t('githubTitle')}
        link={'https://github.com/jakubwilk'}
        icon={<GithubIcon strokeColor={strokeColor} />}
      />
      <SocialsGridItem
        name={t('linkedin')}
        description={t('linkedinDescription')}
        title={t('linkedinTitle')}
        link={'https://www.linkedin.com/in/jakub-wilk/'}
        icon={<LinkedinIcon strokeColor={strokeColor} />}
      />
    </div>
  )
}
