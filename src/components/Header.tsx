import { Button, Title } from '@mantine/core'
import classes from './components.module.css'
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react'
import clsx from 'clsx'

export default function Header() {
  return (
    <header
      className={
        'px-4 pb-4 pt-16 flex flex-col justify-end gap-4 md:gap-8 md:px-8 md:pb-8 md:pt-32'
      }
    >
      <Title className='m-0 text-4xl font-extrabold uppercase tracking-widest md:text-6xl'>
        Jakub Wilk
      </Title>
      <div className='flex items-center gap-2'>
        <Button
          href='https://github.com/jakubwilk'
          leftSection={<IconBrandGithub size={14} />}
          component='a'
          target='_blank'
          size='xs'
          color='gray'
          variant='light'
          className={clsx(classes.headerButtonLink, classes.headerButtonLinkGithub)}
        >
          Github
        </Button>
        <Button
          href='https://www.linkedin.com/in/jakub-wilk/'
          leftSection={<IconBrandLinkedin size={14} />}
          component='a'
          target='_blank'
          size='xs'
          color='blue'
          variant='light'
          className={clsx(classes.headerButtonLink, classes.headerButtonLinkLinkedin)}
        >
          Linkedin
        </Button>
      </div>
    </header>
  )
}
