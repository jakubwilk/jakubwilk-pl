import { IProject } from 'models'
import ItemProject from './ItemProject'

interface IGridProjectsProps {
  projects: IProject[]
}

export default function GridProjects({ projects }: IGridProjectsProps) {
  return (
    <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      {projects.map((project) => (
        <ItemProject key={project.id} project={project} />
      ))}
    </div>
  )
}
