import { Fragment } from 'react'
import { AppLayout, ThemeNavbar } from '@app-components'

function App() {
  return (
    <AppLayout>
      <Fragment>
        <ThemeNavbar />
        <div className={'flex items-center justify-center'}>
          <h1 className={'title'}>{'jakubwilk.pl'}</h1>
        </div>
      </Fragment>
    </AppLayout>
  )
}

export default App
