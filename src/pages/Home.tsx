import { About, Header, Projects } from 'components'

export default function Home() {
  return (
    <div className='container max-w-6xl mx-auto md:border-x border-hairline'>
      <Header />
      <About />
      <Projects />
    </div>
  )
}
