import { Alert, Loader, Text } from '@mantine/core'
import useGetProjectsQuery from '../hooks/useGetProjectsQuery'
import GridProjects from './projects/GridProjects'
import { useCallback } from 'react'
import classes from './components.module.css'

export default function Projects() {
  const { data, isLoading } = useGetProjectsQuery()

  const renderProjects = useCallback(() => {
    if (!isLoading && data && data.total === 0) {
      return (
        <Alert variant='outline' color='gray'>
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
    <div className='px-4 py-16 md:px-8 md:py-16'>
      <Text className={classes.monoLabel} mb={32}>
        03 / Projects
      </Text>
      {renderProjects()}
    </div>
  )
}
