'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@hooks/useTranslation'
import { IProject } from '@models/projects.model'

const getProjects = async () => {
  const response = await fetch('https://proxy-jakubwilk.underwolfstudio.com/projects', {
    method: 'GET',
  })
  return await response.json()
}

const useProjectsQuery = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<Array<IProject>>([])
  const [error, setError] = useState<null | string>(null)

  useEffect(() => {
    getProjects()
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        setError(t('apiRequestError'))
      })
      .finally(() => setIsLoading(false))
  }, [t])

  return { data, isLoading, error }
}

export default useProjectsQuery
