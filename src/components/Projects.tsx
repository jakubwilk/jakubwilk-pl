import { Title, Alert } from '@mantine/core'

export default function Projects() {
  return (
    <div className='px-4 pb-16 md:px-8 md:pt-8 md:pb-16'>
      <Title className='mt-0 mb-8 text-3xl font-extrabold uppercase tracking-widest'>
        Projects
      </Title>
      <Alert variant='light' color='gray' radius={0}>
        Currently there are no projects to display or this part of the site is not ready
        yet.
      </Alert>
    </div>
  )
}
