import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Container,
  Group,
  Button,
  Divider,
} from "@mantine/core";
import { GoogleButton } from "../../Icons/GoogleButton";
import classes from "./Registration.module.css";
import { useState } from "react";
import axios from "axios";

interface UserInfo {
  firstName?: string;
  lastName?: string;
  username: string;
  email: string;
  password: string;
}

export default function Register() {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    username: "",
    email: "",
    password: "",
  });
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const handleUserInfo = (info: { [infoName: string]: string }) => {
    setUserInfo((prevState: UserInfo) => ({ ...prevState, ...info }));
  };

  const handleSubmit = () => {
    if (passwordConfirmation !== userInfo.password) {
      console.log("password doesnt match");
    } else {
      axios
        .post(`${import.meta.env.VITE_DJANGO_API_URL}/register/`, userInfo)
        .then(() => console.log("login successful"))
        .catch((err) => console.error(err));
    }
  };

  return (
    <Container w={"100%"} my={20}>
      <Title ta="center" className={classes.title}>
        Sign Up
      </Title>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Group grow>
          <TextInput
            label="First Name"
            placeholder="First Name"
            onChange={(e) => handleUserInfo({ firstName: e.target.value })}
          />
          <TextInput
            label="Last Name"
            placeholder="Last Name"
            onChange={(e) => handleUserInfo({ lastName: e.target.value })}
          />
        </Group>
        <TextInput
          label="Email"
          placeholder="Email"
          required
          onChange={(e) => handleUserInfo({ email: e.target.value })}
        />
        <TextInput
          label="Username"
          placeholder="Username"
          required
          onChange={(e) => handleUserInfo({ username: e.target.value })}
        />
        <PasswordInput
          label="Password"
          required
          mt="md"
          onChange={(e) => handleUserInfo({ password: e.target.value })}
        />
        <PasswordInput
          label="Confirm Password"
          required
          mt="md"
          onChange={(e) => setPasswordConfirmation(e.target.value)}
        />
        <Button fullWidth color="teal" mt="sm" onClick={handleSubmit}>
          Create Account
        </Button>
        <Divider label="OR" labelPosition="center" my="xs" />
        <Group grow mb="xs" mt="xs">
          <GoogleButton radius="xl">Google</GoogleButton>
        </Group>
      </Paper>
    </Container>
  );
}
