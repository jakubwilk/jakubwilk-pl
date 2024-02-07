import { ThemeTypesEnum } from '@enums/ThemeEnums'

export type ThemeType = ThemeTypesEnum.LIGHT | ThemeTypesEnum.DARK

export type ThemeContextType = {
  theme: ThemeType
  // eslint-disable-next-line no-unused-vars
  handleSetTheme: (theme: ThemeType) => void
}
