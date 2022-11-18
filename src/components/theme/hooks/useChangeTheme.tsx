import { MouseEvent, useCallback } from 'react'

import { ThemeColorsEnum } from '../models'

function useChangeTheme() {
  const changeThemeHandler = useCallback(
    (e: MouseEvent<HTMLButtonElement>, theme: ThemeColorsEnum) => {
      e.preventDefault()
      const body = document.getElementById('appBody')

      if (theme === ThemeColorsEnum.LIGHT) {
        body?.classList.add('light-theme')
      } else {
        body?.classList.remove('light-theme')
      }
    },
    []
  )

  return { changeThemeHandler }
}

export default useChangeTheme
