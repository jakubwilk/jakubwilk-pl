import { createContext, ReactNode, useCallback, useMemo, useState } from 'react'
import { ThemeTypesEnum } from '@enums/ThemeEnums'
import { ThemeContextType } from '@models/theme.models'

export const ThemeContext = createContext<ThemeContextType>({
  theme: ThemeTypesEnum.LIGHT,
  handleSetTheme: () => {},
})

interface IProps {
  children: ReactNode
}

export const ThemeContextProvider = ({ children }: IProps) => {
  const [theme, setTheme] = useState<ThemeTypesEnum>(ThemeTypesEnum.LIGHT)

  const handleSetTheme = useCallback((theme: ThemeTypesEnum) => {
    setTheme(theme)
  }, [])

  const contextValues: ThemeContextType = useMemo(
    () => ({
      theme,
      handleSetTheme,
    }),
    [handleSetTheme, theme],
  )

  return <ThemeContext.Provider value={contextValues}>{children}</ThemeContext.Provider>
}
