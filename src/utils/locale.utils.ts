import { localeConfig } from '@config/locale'

export const getTranslation = () => {
  const translate = (locale: string) => {
    let value = 'pl'

    if (typeof window !== 'undefined') {
      value = localStorage.getItem('lang') || 'pl'
    }

    return localeConfig[value][locale]
  }

  return { translate }
}
