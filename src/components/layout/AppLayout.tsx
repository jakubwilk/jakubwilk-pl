import { ReactNode } from 'react'

interface IProps {
  children: ReactNode
}

function AppLayout({ children }: IProps) {
  return (
    <div className={'container mx-auto xl:max-w-[50vw] relative'}>
      <div className={'py-48'}>{children}</div>
    </div>
  )
}

export default AppLayout
