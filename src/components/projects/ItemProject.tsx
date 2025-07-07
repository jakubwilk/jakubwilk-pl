import {
  Badge,
  Button,
  Card,
  CardSection,
  Divider,
  Group,
  Image,
  Text,
} from '@mantine/core'
import { IProject } from 'models'

interface IItemProjectProps {
  project: IProject
}

export default function ItemProject({ project }: IItemProjectProps) {
  return (
    <Card padding='lg' withBorder>
      <CardSection>
        <Image src={project.image} alt={project.name} height={200} />
      </CardSection>
      <Divider my='md' />
      <div className='flex flex-col gap-2 mb-4'>
        <Text size='lg' fw={500}>
          {project.name}
        </Text>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((technology) => (
            <Badge key={technology}>{technology}</Badge>
          ))}
        </div>
      </div>
      <Text>{project.description}</Text>
      <Button
        fullWidth
        radius={0}
        mt='md'
        component='a'
        href={project.link}
        target='_blank'
      >
        {project.name + ' on GitHub'}
      </Button>
    </Card>
  )
}
