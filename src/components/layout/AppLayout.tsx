import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

function AppLayout({ children }: IProps) {
  return (
    <div className={'container mx-auto xl:max-w-[50vw]'}>
      <div className={'py-24 sm:py-36 md:py-48 mx-4 relative'}>{children}</div>
    </div>
  )
}

export default AppLayout
