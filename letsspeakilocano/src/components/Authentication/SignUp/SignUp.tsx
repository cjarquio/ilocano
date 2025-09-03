import { Button, Group, PasswordInput, TextInput } from '@mantine/core';
import { useForm, isEmail, hasLength } from '@mantine/form';
import { FormEvent } from 'react';

// TODO: Add Formik for form handling and validation
export const SignUp: React.FC = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
    },
    validate: {
      firstName: hasLength(
        { min: 2, max: 20 },
        'First name must be between 2 and 20 characters'
      ),
      lastName: hasLength(
        { min: 2, max: 20 },
        'Last name must be between 2 and 20 characters'
      ),
      username: hasLength(
        { min: 3, max: 15 },
        'Username must be between 3 and 15 characters'
      ),
      email: isEmail('Invalid email'),
      password: hasLength(
        { min: 6 },
        'Password must be at least 6 characters long'
      ),
    },
  });
  const handleRegister = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/register/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: form.values.firstName,
          lastName: form.values.lastName,
          username: form.values.username,
          email: form.values.email,
          password: form.values.password,
        }),
      }).then(async (response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        } else {
          form.reset();
        }
      });
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error (e.g., show notification)
    }
  };

  return (
    <form onSubmit={(e) => handleRegister(e)}>
      <Group justify="space-between" wrap="nowrap">
        <TextInput
          label="First Name"
          required
          radius="md"
          key={form.key('firstName')}
          {...form.getInputProps('firstName')}
        />
        <TextInput
          label="Last Name"
          required
          radius="md"
          key={form.key('lastName')}
          {...form.getInputProps('lastName')}
        />
      </Group>
      <TextInput
        label="Username"
        required
        mt="xs"
        radius="md"
        key={form.key('username')}
        {...form.getInputProps('username')}
      />
      <TextInput
        label="Email"
        required
        radius="xs"
        key={form.key('email')}
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label="Password"
        required
        mt="xs"
        radius="md"
        key={form.key('password')}
        {...form.getInputProps('password')}
      />
      <Button type="submit" fullWidth mt="md" radius="md">
        Register
      </Button>
    </form>
  );
};

export default SignUp;
