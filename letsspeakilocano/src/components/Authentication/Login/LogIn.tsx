import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { FormEvent, useState } from 'react';

export const LogIn: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState({ username: '', password: '' });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: loginInfo.username,
          password: loginInfo.password,
        }),
      })
        .then(async (response) => {
          if (!response.ok) {
            const error = await response.text();
            throw new Error(error);
          } else {
            const successMessage = await response.text();

            console.log(successMessage);
          }
        })
        .then(() => setLoginInfo({ username: '', password: '' }));
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show notification)
    }
  };

  return (
    <form className="mt-8" onSubmit={(e) => handleLogin(e)}>
      <TextInput
        label="Username"
        required
        radius="md"
        value={loginInfo.username}
        onChange={handleChange}
        name="username"
      />
      <PasswordInput
        label="Password"
        required
        mt="md"
        radius="md"
        value={loginInfo.password}
        onChange={handleChange}
        name="password"
      />
      <Group justify="space-between" mt="lg">
        <Checkbox label="Remember me" />
        <Anchor component="button" size="sm">
          Forgot password?
        </Anchor>
      </Group>
      <Button type="submit" fullWidth mt="xl" radius="md">
        Sign in
      </Button>
    </form>
  );
};

export default LogIn;
