import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useState } from 'react';

export const LogIn: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginInfo.username,
          password: loginInfo.password,
        }),
      }).then(async (response) => {
        if (!response.ok) {
          const error = await response.text();
          throw new Error(error);
        } else {
          const successMessage = await response.text();

          console.log(successMessage);
        }
      });
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show notification)
    }
  };
  return (
    <Container className="mt-8">
      <TextInput
        label="Username"
        required
        radius="md"
        onChange={handleChange}
        value={loginInfo.username}
        name="username"
      />
      <PasswordInput
        label="Password"
        required
        mt="md"
        radius="md"
        onChange={handleChange}
        value={loginInfo.password}
        name="password"
      />
      <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group>
      <Button fullWidth mt="xl" radius="md" onClick={handleLogin}>
        Sign in
      </Button>
    </Container>
  );
};

export default LogIn;
