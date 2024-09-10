import { About, Header, Projects } from 'components'
import { MantineProvider } from '@mantine/core'

import '@mantine/core/styles.layer.css'

export default function App() {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'orange',
        fontFamily: 'Barlow, sans-serif',
        headings: { fontFamily: 'Barlow, sans-serif' },
      }}
    >
      <div className='container lg:max-w-[60vw] mx-auto'>
        <Header />
        <About />
        <Projects />
      </div>
    </MantineProvider>
  )
}
