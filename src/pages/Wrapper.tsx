'use client'
import { ReactNode } from 'react'
import { ThemeContextProvider } from '@context/ThemeContext'

interface IProps {
  children: ReactNode
}

export const Wrapper = ({ children }: IProps) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>
}
