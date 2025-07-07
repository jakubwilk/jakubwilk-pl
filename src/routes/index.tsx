import { createFileRoute } from '@tanstack/react-router'
import { Home } from 'pages'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Home />
}
