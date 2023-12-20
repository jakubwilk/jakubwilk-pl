'use client'

import { ReactNode } from 'react'

interface IProps {
  name: string
  description: string
  title: string
  link: string
  icon: ReactNode
}

export default function SocialsGridItem({
  name,
  description,
  title,
  link,
  icon,
}: IProps) {
  return (
    <a className={'flex p-4 card'} href={link} title={title}>
      {icon}
      <div className={'flex justify-start flex-col pl-2'}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </a>
  )
}
