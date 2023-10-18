'use client'
import { useCallback, useMemo } from 'react'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { useThemeContext } from '@hooks/useThemeContext'
import { clsx } from 'clsx'

export default function Header() {
  const { theme, handleSetTheme } = useThemeContext()

  const isThemeLight = useMemo(() => theme === ThemeTypesEnum.LIGHT, [theme])

  const handleLightTheme = useCallback(() => {
    handleSetTheme(ThemeTypesEnum.LIGHT)
  }, [handleSetTheme])

  const handleDarkTheme = useCallback(() => {
    handleSetTheme(ThemeTypesEnum.DARK)
  }, [handleSetTheme])

  return (
    <div className={'w-full flex justify-end'}>
      <button
        className={clsx('w-[50px] h-[50px]', !isThemeLight && 'button-dark-active')}
        onClick={handleDarkTheme}
        title={'Zmień na tryb ciemny'}
      >
        {'🌑'}
      </button>
      <button
        className={clsx('w-[50px] h-[50px]', isThemeLight && 'button-light-active')}
        onClick={handleLightTheme}
        title={'Zmień na tryb jasny'}
      >
        {'🌕'}
      </button>
    </div>
  )
}
