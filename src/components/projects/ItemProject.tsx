import { Badge, Button, Card, CardSection, Divider, Image, Text } from '@mantine/core'
import { IProject } from 'models'
import classes from '../components.module.css'
import clsx from 'clsx'

interface IItemProjectProps {
  project: IProject
}

export default function ItemProject({ project }: IItemProjectProps) {
  return (
    <Card padding='lg' withBorder className={classes.projectCard}>
      <CardSection>
        <Image src={project.image} alt={project.name} h={200} />
      </CardSection>
      <Divider my='md' color='var(--mantine-color-gray-3)' />
      <div className='flex flex-col gap-2 mb-4'>
        {project.madeByAI && (
          <Badge color='blue' variant='light' size='sm'>
            Made by AI
          </Badge>
        )}
        <div className='flex items-baseline gap-2'>
          <Text className={classes.monoLabel}>
            {String(project.id).padStart(2, '0')}
          </Text>
          <Text size='lg' fw={500}>
            {project.name}
          </Text>
        </div>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((technology) => (
            <Badge
              key={technology}
              variant='outline'
              color='gray'
              leftSection={<span className={classes.accentDot} />}
              classNames={{
                root: classes.techBadge,
                label: clsx(classes.monoLabel, classes.techBadgeLabel, '!leading-[auto]'),
              }}
            >
              {technology}
            </Badge>
          ))}
        </div>
      </div>
      <Text>{project.description}</Text>
      <Button fullWidth mt='md' component='a' href={project.link} target='_blank'>
        {project.name + ' on GitHub'}
      </Button>
    </Card>
  )
}
