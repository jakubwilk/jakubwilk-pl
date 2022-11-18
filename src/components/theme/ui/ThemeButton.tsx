import { MouseEvent, useMemo } from 'react'
import clsx from 'clsx'

import { ThemeColorsEnum } from '../models'

interface IProps {
  theme: ThemeColorsEnum
  themeClassName: string
  onClickHandlder: (e: MouseEvent<HTMLButtonElement>, theme: ThemeColorsEnum) => void
}

function ThemeButton({ theme, themeClassName, onClickHandlder }: IProps) {
  const isDarkTheme = useMemo(() => theme === ThemeColorsEnum.DARK, [theme])

  return (
    <button
      className={clsx(
        themeClassName,
        'hover:bg-red focus:bg-red',
        'focus:outline-0',
        'transition duration-100 ease-out',
        'h-[30px] sm:h-[50px] min-w-[35px] sm:min-w-[50px]'
      )}
      title={isDarkTheme ? 'Zmień motyw na ciemny' : 'Zmień motyw na jasny'}
      onClick={(e) =>
        onClickHandlder(e, isDarkTheme ? ThemeColorsEnum.DARK : ThemeColorsEnum.LIGHT)
      }
    >
      <span
        className={clsx(
          'sr-only',
          'uppercase',
          'font-sans font-light',
          'tracking-widest',
          'px-4 sm:px-0'
        )}
      >
        {'Ciemny'}
      </span>
      <span className={'sm:not-sr-only'}>{isDarkTheme ? '🌚' : '🌝'}</span>
    </button>
  )
}

export default ThemeButton
