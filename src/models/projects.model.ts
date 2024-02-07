export interface IProject {
  id: string
  name: string
  description: string
  link: string
  technologies: Array<IProjectTech>
  status: string
  isActive: boolean
}

export interface IProjectTech {
  name: string
  id: string
}

export interface IProjectsResponse {
  status: number
  data: Array<IProject>
}
