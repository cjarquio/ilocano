import {
  Button,
  Container,
  Group,
  PasswordInput,
  TextInput,
} from '@mantine/core';

// TODO: Add Formik for form handling and validation
export const SignUp: React.FC = () => {
  const handleRegister = () => {
    // Handle registration logic here
    try {
      // Need to post registration data to the django backend
      // For now, just logging to console
      console.log('Registration attempt');
    } catch (error) {
      console.error('Registration failed:', error);
      // Handle registration error (e.g., show notification)
    }
  };
  return (
    <Container className="mt-2">
      <Group justify="space-between" wrap="nowrap">
        <TextInput label="First Name" required radius="md" />
        <TextInput label="Last Name" required radius="md" />
      </Group>
      <TextInput label="Username" required mt="xs" radius="md" />
      <TextInput label="Email" required radius="xs" />
      <PasswordInput label="Password" required mt="xs" radius="md" />
      <Button fullWidth mt="md" radius="md" onClick={handleRegister}>
        Register
      </Button>
    </Container>
  );
};

export default SignUp;
