import { Image, Container, Title, Button, Text, Group } from "@mantine/core";
import classes from "./Landing.module.css";
import { tropical } from "../../../assets/images";

export const Landing = () => {
  return (
    <Container size="md">
      <Title>Start your Ilocano journey</Title>
      <div className={classes.inner}>
        <div className={classes.content}>
          <Title className={classes.title}>Beginner-friendly approach</Title>
          <Text c="dimmed" mt="md">
            As a beginner, you can start learning Ilocano without any prior
            knowledge. Once you've signed up for an account, you will have
            access to interactive lessons and quizzes. It's easy to get started!
          </Text>
          <Group mt={30}>
            <Button radius="xl" size="md" className={classes.control}>
              Sign Up
            </Button>
            <Button
              variant="default"
              radius="xl"
              size="md"
              className={classes.control}
            >
              Log In
            </Button>
          </Group>
        </div>
        <Image
          src={tropical}
          className={classes.image}
          radius={"md"}
          alt="Couple backpacking somewhere tropical"
        />
      </div>
    </Container>
  );
};

export default Landing;
