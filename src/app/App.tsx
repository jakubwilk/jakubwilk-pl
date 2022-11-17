import { Fragment } from 'react'
import { AppLayout, ThemeNavbar } from '@app-components'

function App() {
  return (
    <AppLayout>
      <Fragment>
        {'App'}
        <ThemeNavbar />
      </Fragment>
    </AppLayout>
  )
}

export default App
