import { ReactNode } from 'react'
import { getTranslation } from '@utils/locale.utils'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({ subsets: ['latin-ext'], weight: ['300', '400', '700'] })

// eslint-disable-next-line no-unused-vars
export async function generateMetadata({ params }: any) {
  // @ts-ignore
  const { translate } = getTranslation()

  return {
    title: translate('pageTitle'),
    description: translate('pageDescription'),
  }
}

interface IProps {
  children: ReactNode
}

export default function RootLayout({ children }: IProps) {
  return (
    <html lang={'en'}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
