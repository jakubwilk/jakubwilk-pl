import { useChangeTheme } from '../hooks'
import { ThemeColorsEnum } from '../models'

import ThemeButton from './ThemeButton'

function ThemeNavbar() {
  const { changeThemeHandler } = useChangeTheme()

  return (
    <nav className={'absolute top-0 right-0 z-10'}>
      <div>
        <ThemeButton
          theme={ThemeColorsEnum.LIGHT}
          themeClassName={'light-theme-button'}
          onClickHandlder={changeThemeHandler}
        />
        <ThemeButton
          theme={ThemeColorsEnum.DARK}
          themeClassName={'dark-theme-button'}
          onClickHandlder={changeThemeHandler}
        />
      </div>
    </nav>
  )
}

export default ThemeNavbar
