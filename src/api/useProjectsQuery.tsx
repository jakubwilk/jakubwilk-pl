'use client'

import { QueryOptions, useQuery } from '@tanstack/react-query'

import { QueryKeyEnum } from '@/api/api.keys'

const getProjects = async () => {
  const response = await fetch('https://proxy-jakubwilk.underwolfstudio.com/projects', {
    method: 'GET',
  })
  const { data } = await response.json()

  return data
}

const useProjectsQuery = (options?: QueryOptions) => {
  return useQuery({
    queryKey: [QueryKeyEnum.GET_PROJECTS],
    queryFn: getProjects,
    ...options,
  })
}

export default useProjectsQuery
