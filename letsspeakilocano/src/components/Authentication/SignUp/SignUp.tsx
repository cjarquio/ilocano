import {
  Button,
  Container,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';

export const SignUp: React.FC = () => {
  return (
    <Container>
      <Group justify="space-between">
        <TextInput label="First Name" required radius="md" />
        <TextInput label="Last Name" required radius="md" />
      </Group>
      <TextInput label="Username" required mt="md" radius="md" />
      <TextInput label="Email" required radius="md" />
      <PasswordInput label="Password" required mt="md" radius="md" />
      <Button fullWidth mt="xl" radius="md">
        Register
      </Button>
    </Container>
  );
};

export default SignUp;
