import { Image, Container, Title, Button, Text } from '@mantine/core'
import classes from './Landing.module.css'
import { tropical } from '../../../assets/images'

export const Landing = () => {
  return (
    <Container size="md">
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>
            Beginner-friendly approach
          </Title>
          <Text c="dimmed" mt="md">
            As a beginner, you can start learning Ilocano without any prior knowledge. Once you've signed up for an account, you will have access to interactive lessons and quizzes. It's easy to get started!
          </Text>
          <Button radius="xl" size="md" className={classes.control}>
            Get started
          </Button>
          </div>
        <Image src={tropical} className={classes.image} alt='Couple backpacking somewhere tropical' />
      </div>
    </Container>
  )
}

export default Landing