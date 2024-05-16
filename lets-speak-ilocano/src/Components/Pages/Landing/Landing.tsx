import { Image, Container, Title, Button, Text, Group } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import classes from "./Landing.module.css";
import { tropical } from "../../../assets/images";

export const Landing = () => {
  const navigate = useNavigate();

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
            <Button
              variant="light"
              color="indigo"
              radius="md"
              size="md"
              fullWidth
              className={classes.control}
              onClick={() => navigate("/register")}
            >
              Get Started
            </Button>
            <Button
              variant="filled"
              color="teal"
              radius="md"
              size="md"
              fullWidth
              className={classes.control}
              onClick={() => navigate("/login")}
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
