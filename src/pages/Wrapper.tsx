'use client'
import { ReactNode } from 'react'
import { LanguageContextProvider } from '@context/LanguageContext'
import { ThemeContextProvider } from '@context/ThemeContext'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

interface IProps {
  children: ReactNode
}

const queryClient = new QueryClient()

export default function Wrapper({ children }: IProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContextProvider>
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </LanguageContextProvider>
    </QueryClientProvider>
  )
}
