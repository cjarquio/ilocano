import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Divider,
} from "@mantine/core";
import axios from "axios";
import { GoogleButton } from "../../Icons/GoogleButton";
import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    axios
      .post(`${import.meta.env.VITE_DJANGO_API_URL}/login/`, {
        username: username,
        password: password,
      })
      .then(() => console.log("login successful"))
      .catch((err) => console.error(err));
  };
  const onUsernameChange = (username: string) => {
    setUsername(username);
  };
  const onPasswordChange = (password: string) => {
    setPassword(password);
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center" className={classes.title}>
        Welcome back to Agsarita Tayo!
      </Title>

      <Paper withBorder shadow="md" p={"xl"} mt={30} radius="md">
        <Group grow mb="md" mt="md">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>

        <Divider
          label="Or continue with email"
          labelPosition="center"
          my="lg"
        />
        <TextInput
          label="Username"
          placeholder="Username"
          onChange={(e) => onUsernameChange(e.target.value)}
          required
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          onChange={(e) => onPasswordChange(e.target.value)}
          required
          mt="md"
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth color="teal" mt="xl" onClick={handleLogin}>
          Sign in
        </Button>

        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{" "}
          <Anchor
            size="sm"
            component="button"
            onClick={() => navigate("/register")}
          >
            Create account
          </Anchor>
        </Text>
      </Paper>
    </Container>
  );
}
