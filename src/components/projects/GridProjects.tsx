import { IProject } from 'models'

interface IGridProjectsProps {
  projects: IProject[]
}

export default function GridProjects({ projects }: IGridProjectsProps) {
  console.log('projects', projects)

  return <div>GridProjects</div>
}
