'use client'
import HeaderLanguageSwitcher from '@components/HeaderLanguageSwitcher'
import HeaderThemeSwitcher from '@components/HeaderThemeSwitcher'

export default function Header() {
  return (
    <div className={'absolute top-0 left-0 z-10 w-full'}>
      <div className={'flex justify-between gap-4'}>
        <HeaderLanguageSwitcher />
        <HeaderThemeSwitcher />
      </div>
    </div>
  )
}
