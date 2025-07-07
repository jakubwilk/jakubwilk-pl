import { About, Header, Projects } from 'components'

export default function Home() {
  return (
    <div className='container lg:max-w-[60vw] mx-auto'>
      <Header />
      <About />
      <Projects />
    </div>
  )
}
