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
    email: '',
    password: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    console.log('Form values:', loginInfo);
    try {
      fetch('http://localhost:8000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginInfo.email,
          password: loginInfo.password,
        }),
      }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
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
        label="Email"
        placeholder="Your Email"
        required
        radius="md"
        onChange={handleChange}
        value={loginInfo.email}
        name="email"
      />
      <PasswordInput
        label="Password"
        placeholder="Your Password"
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
