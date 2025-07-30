import { Badge, Button, Card, CardSection, Divider, Image, Text } from '@mantine/core'
import { IProject } from 'models'

interface IItemProjectProps {
  project: IProject
}

export default function ItemProject({ project }: IItemProjectProps) {
  return (
    <Card padding='lg' radius={0} withBorder>
      <CardSection>
        <Image src={project.image} alt={project.name} height={200} />
      </CardSection>
      <Divider my='md' />
      <div className='flex flex-col gap-2 mb-4'>
        {project.madeByAI && (
          <Badge color='blue' variant='light' size='sm' radius={0}>
            Made by AI
          </Badge>
        )}
        <Text size='lg' fw={500}>
          {project.name}
        </Text>
        <div className='flex flex-wrap gap-2'>
          {project.technologies.map((technology) => (
            <Badge radius={0} key={technology}>
              {technology}
            </Badge>
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
