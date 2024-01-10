'use client'
import HeaderLanguageSwitcher from '@components/header/HeaderLanguageSwitcher'
import HeaderThemeSwitcher from '@components/header/HeaderThemeSwitcher'

export default function Header() {
  return (
    <div className={'absolute top-0 left-0 z-10 w-full px-4 '}>
      <div className={'flex justify-between gap-4'}>
        <HeaderLanguageSwitcher />
        <HeaderThemeSwitcher />
      </div>
    </div>
  )
}
