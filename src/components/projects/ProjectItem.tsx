'use client'

import { ItemStatus } from '@components/common/ItemStatus'
import { IProject, IProjectTech } from '@models/projects.model'

interface IProps {
  project: IProject
}

export function ProjectItem({ project }: IProps) {
  return (
    <div className={'w-full p-4 game-item'}>
      <h3 className={'mb-4 game-title'}>{project.name}</h3>
      <p className={'mb-4'}>{project.description}</p>
      <ul className={'mb-4 tech-list'}>
        {project.technologies.map(({ name, id }: IProjectTech) => (
          <li key={id} className={'mb-1 last:mb-0 tech-list-item'}>
            {name}
          </li>
        ))}
      </ul>
      <ItemStatus text={project.status} isActive={project.isActive} />
    </div>
  )
}
