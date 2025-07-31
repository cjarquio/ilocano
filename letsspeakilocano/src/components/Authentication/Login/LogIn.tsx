import {
  Anchor,
  Button,
  Checkbox,
  Container,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';

export const LogIn: React.FC = () => {
  return (
    <Container>
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
      <Button fullWidth mt="xl" radius="md">
        Sign in
      </Button>
    </Container>
  );
};

export default LogIn;
