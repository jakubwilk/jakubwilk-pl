import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.layer.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const router = createRouter({ routeTree })
const queryClient = new QueryClient()

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'orange',
        fontFamily: 'Barlow, sans-serif',
        headings: { fontFamily: 'Barlow, sans-serif' },
      }}
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  )
}
