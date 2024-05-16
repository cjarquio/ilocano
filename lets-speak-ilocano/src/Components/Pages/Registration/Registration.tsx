import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
  Divider,
  Text,
  Anchor,
} from "@mantine/core";
import { GoogleButton } from "../../Icons/GoogleButton";
import classes from "./Registration.module.css";

export default function Register() {
  return (
    <Container w={"100%"} my={40}>
      <Title ta="center" className={classes.title}>
        Sign Up
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Group grow>
          <TextInput label="First Name" placeholder="First Name" />
          <TextInput label="Last Name" placeholder="Last Name" />
        </Group>
        <TextInput label="Email" placeholder="Email" required />
        <TextInput label="Username" placeholder="Username" required />
        <PasswordInput label="Password" required mt="md" />
        <PasswordInput label="Confirm Password" required mt="md" />
        <Button fullWidth color="teal" mt="xl">
          Create Account
        </Button>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
        </Text>
        <Divider label="OR" labelPosition="center" my="lg" />
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>
      </Paper>
    </Container>
  );
}
