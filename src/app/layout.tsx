import { ReactNode } from 'react'
import { Poppins } from 'next/font/google'

import './globals.css'

const poppins = Poppins({ subsets: ['latin-ext'], weight: '400' })

export const metadata = {
  title: 'Jakub Wilk | Developer',
  description:
    'Jakub Wilk | Front-End developer pracujący głównie w technologii React i TypeScript, zaś po godzinach NodeJS i przeróżne gry',
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
