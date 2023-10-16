import Header from '@/components/Header'

export default function HomePage() {
  return (
    <div className={'container mx-auto'}>
      <Header />
      <main className={'flex items-center justify-center min-h-screen'}>
        <h1>{'Comming soon'}</h1>
      </main>
    </div>
  )
}
