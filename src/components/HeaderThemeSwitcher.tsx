'use client'

import { useCallback, useMemo } from 'react'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { useTranslation } from '@hooks/useTranslation'
import { clsx } from 'clsx'

export default function HeaderThemeSwitcher() {
  const { theme, handleSetTheme } = useThemeContext()
  const { t } = useTranslation()

  const isThemeLight = useMemo(() => theme === ThemeTypesEnum.LIGHT, [theme])

  const handleTheme = useCallback(
    (theme: ThemeTypesEnum) => {
      handleSetTheme(theme)
    },
    [handleSetTheme],
  )

  return (
    <div className={'flex items-center'}>
      <button
        className={clsx('w-[50px] h-[50px]', !isThemeLight && 'button-dark-active')}
        onClick={() => handleTheme(ThemeTypesEnum.DARK)}
        title={t('themeDark')}
      >
        {'🌑'}
      </button>
      <button
        className={clsx('w-[50px] h-[50px]', isThemeLight && 'button-light-active')}
        onClick={() => handleTheme(ThemeTypesEnum.LIGHT)}
        title={t('themeLight')}
      >
        {'🌕'}
      </button>
    </div>
  )
}
