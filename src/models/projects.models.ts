export interface IProject {
  id: number
  name: string
  description: string
  image: string
  link: string
  technologies: string[]
  madeByAI: boolean
}

export interface IProjectsResponse {
  projects: IProject[]
  total: number
}
