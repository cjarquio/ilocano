import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';
import { useForm, isEmail, hasLength } from '@mantine/form';

export const LogIn: React.FC = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: isEmail('Invalid email'),
      password: hasLength(
        { min: 6 },
        'Password must be at least 6 characters long'
      ),
    },
  });

  const handleLogin = () => {
    try {
      // Need to post registration data to the django backend
      // For now, just logging to console
      console.log('login values', form.values);
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
        {...form.getInputProps('email')}
      />
      <PasswordInput
        label="Password"
        placeholder="Your Password"
        required
        mt="md"
        radius="md"
        key={form.key('password')}
        {...form.getInputProps('password')}
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
