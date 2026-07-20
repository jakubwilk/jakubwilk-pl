import { Text, Badge, Timeline, ThemeIcon } from '@mantine/core'
import {
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandRedux,
  IconPointFilled,
  IconBrandMantine,
  IconCheck,
  IconChevronRight,
  IconBrandDocker,
} from '@tabler/icons-react'
import { ReactNode } from 'react'
import classes from './components.module.css'
import clsx from 'clsx'

interface ITechStack {
  name: string
  icon: ReactNode | null
}

const TECH_STACK: ITechStack[] = [
  { name: 'JavaScript', icon: <IconBrandJavascript size={14} /> },
  { name: 'TypeScript', icon: <IconBrandTypescript size={14} /> },
  { name: 'React', icon: <IconBrandReact size={14} /> },
  { name: 'NextJS', icon: <IconBrandNextjs size={14} /> },
  { name: 'NestJS', icon: <IconPointFilled size={14} /> },
  { name: 'Express', icon: <IconPointFilled size={14} /> },
  { name: 'Redux', icon: <IconBrandRedux size={14} /> },
  { name: 'Tanstack', icon: <IconPointFilled size={14} /> },
  { name: 'Material UI', icon: <IconPointFilled size={14} /> },
  { name: 'Mantine', icon: <IconBrandMantine size={14} /> },
  { name: 'Docker', icon: <IconBrandDocker size={14} /> },
  { name: 'n8n', icon: <IconPointFilled size={14} /> },
]

export default function About() {
  return (
    <div className='px-4 py-16 flex flex-col border-b border-hairline md:grid md:grid-cols-12 md:gap-4 md:px-8 lg:gap-8'>
      <section className='md:col-start-1 md:col-end-7 lg:col-end-8'>
        <Text className={classes.monoLabel} mb={32}>
          01 / About
        </Text>
        <Text className='text-lg'>
          Hi, I'm <span className='font-semibold'>Jakub</span> — a{' '}
          <span className='font-semibold'>Front-End</span> engineer who mainly works with{' '}
          <span className='font-semibold'>React and TypeScript</span>. Along the way I
          picked up backend development with Node.js, automation with n8n, and I also
          like setting up my own servers, from project infrastructure to my own mail
          server. Outside of work I enjoy games, movies, collecting things, and lately
          I've been looking into game development.
        </Text>
        <div className='flex flex-wrap items-center gap-2 mt-4'>
          {TECH_STACK.map((tech) => (
            <Badge
              key={tech.name}
              variant='outline'
              color='gray'
              leftSection={<span className={classes.techIcon}>{tech.icon}</span>}
              classNames={{
                root: clsx('px-2 py-1 !h-auto', classes.techBadge),
                label: clsx(classes.monoLabel, classes.techBadgeLabel, '!leading-[auto]'),
              }}
            >
              {tech.name}
            </Badge>
          ))}
        </div>
      </section>
      <aside className='mt-16 md:mt-0 md:col-start-7 lg:col-start-8 md:col-end-12'>
        <Text className={classes.monoLabel} mb={32}>
          02 / Experience
        </Text>
        <Timeline radius={0} lineWidth={2} bulletSize={18} classNames={{ root: 'px-3' }}>
          <Timeline.Item
            bullet={
              <ThemeIcon size={'sm'} color='orange' radius={0}>
                <IconChevronRight size='0.8rem' />
              </ThemeIcon>
            }
            title={'Xelto'}
          >
            <Text c='dimmed' size='sm'>
              as Front-End in Warsaw
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <ThemeIcon size={'sm'} color='green' radius={0}>
                <IconCheck size='0.8rem' />
              </ThemeIcon>
            }
            title={'Enigma Systemy Ochrony Informacji Sp. z o. o.'}
          >
            <Text c='dimmed' size='sm'>
              as Front-End in Warsaw
            </Text>
          </Timeline.Item>
          <Timeline.Item
            bullet={
              <ThemeIcon size={'sm'} color='green' radius={0}>
                <IconCheck size='0.8rem' />
              </ThemeIcon>
            }
            title={'mediDOK Software Entwicklungs GmbH'}
          >
            <Text c='dimmed' size='sm'>
              as Front-End in Lublin
            </Text>
          </Timeline.Item>
        </Timeline>
      </aside>
    </div>
  )
}
