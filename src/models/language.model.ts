import { LanguageTypesEnum } from '@enums/LanguageEnum'

export type LanguageType = LanguageTypesEnum.POLAND | LanguageTypesEnum.ENGLAND

export type LanguageContextType = {
  lang: LanguageType
  // eslint-disable-next-line no-unused-vars
  handleSetLanguage: (lang: LanguageType) => void
}
