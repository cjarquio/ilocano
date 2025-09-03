import {
  Anchor,
  Button,
  Checkbox,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { FormEvent } from 'react';
import { useForm } from '@mantine/form';

export const LogIn: React.FC = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: { username: '', password: '' },
  });

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: form.values.username,
          password: form.values.password,
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
        .then(() => form.reset());
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
        key={form.key('username')}
        {...form.getInputProps('username')}
        name="username"
      />
      <PasswordInput
        label="Password"
        required
        mt="md"
        radius="md"
        key={form.key('password')}
        {...form.getInputProps('password')}
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
