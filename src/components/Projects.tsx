import { Title, Alert, Loader } from '@mantine/core'
import useGetProjectsQuery from '../hooks/useGetProjectsQuery'
import GridProjects from './projects/GridProjects'
import { useCallback } from 'react'

export default function Projects() {
  const { data, isLoading } = useGetProjectsQuery()

  const renderProjects = useCallback(() => {
    if (!isLoading && data && data.total === 0) {
      return (
        <Alert variant='light' color='gray' radius={0}>
          Currently there are no projects to display or this part of the site is not ready
          yet.
        </Alert>
      )
    }

    if (!isLoading && data && data.total > 0) {
      return <GridProjects projects={data.projects} />
    }

    return (
      <div className='text-center'>
        <Loader />
      </div>
    )
  }, [data, isLoading])

  return (
    <div className='px-4 pb-16 md:px-8 md:pt-8 md:pb-16'>
      <Title className='mt-0 mb-8 text-3xl font-extrabold uppercase tracking-widest'>
        Projects
      </Title>
      {renderProjects()}
    </div>
  )
}
