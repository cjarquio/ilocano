import {
  Button,
  Container,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';

export const SignUp: React.FC = () => {
  return (
    <Container className="mt-2">
      <Group justify="space-between" wrap="nowrap">
        <TextInput label="First Name" required radius="md" />
        <TextInput label="Last Name" required radius="md" />
      </Group>
      <TextInput label="Username" required mt="xs" radius="md" />
      <TextInput label="Email" required radius="xs" />
      <PasswordInput label="Password" required mt="xs" radius="md" />
      <Button fullWidth mt="md" radius="md">
        Register
      </Button>
    </Container>
  );
};

export default SignUp;
