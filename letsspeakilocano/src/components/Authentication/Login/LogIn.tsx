import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';

// TODO: Add Formik for form handling and validation

export const LogIn: React.FC = () => {
  const handleLogin = () => {
    try {
      // Need to post registration data to the django backend
      // For now, just logging to console
      console.log('Login attempt');
    } catch (error) {
      console.error('Login failed:', error);
      // Handle login error (e.g., show notification)
    }
  };
  return (
    <Container className="mt-8">
      <TextInput label="Email" placeholder="Your Email" required radius="md" />
      <PasswordInput
        label="Password"
        placeholder="Your Password"
        required
        mt="md"
        radius="md"
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
