import { useQuery, UseQueryOptions } from '@tanstack/react-query'
import { IProjectsResponse } from 'models'

const getProjects = async () => {
  const response = await fetch('/data/projects.json')
  const data: IProjectsResponse[] = await response.json()

  return data
}

const GET_PROJECTS_QUERY_KEY = 'GET_PROJECTS_QUERY_KEY'

export default function useGetProjectsQuery(
  options?: Omit<
    UseQueryOptions<any, Error, IProjectsResponse, string[]>,
    'queryKey' | 'queryFn'
  >,
) {
  return useQuery({
    queryKey: [GET_PROJECTS_QUERY_KEY],
    queryFn: getProjects,
    ...options,
  })
}
