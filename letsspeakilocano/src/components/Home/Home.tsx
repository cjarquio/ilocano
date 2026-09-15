'use client';
import { Container, Title, Center, Button } from '@mantine/core';
import * as React from 'react';

// TODO: Need to style better for Desktop and Mobile
const Home: React.FC = () => {
  return (
    <Container>
      <Center>
        <Title order={1} m={0} p={0}>
          Hello
        </Title>
        <Button>Logout</Button>
      </Center>
    </Container>
  );
};

export default Home;
