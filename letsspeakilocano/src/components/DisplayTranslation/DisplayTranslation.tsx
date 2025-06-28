'use client';
import { Container, Text } from '@mantine/core';
import * as React from 'react';

export const DisplayTranslation: React.FC = () => {
  React.useEffect(() => {
    fetch('http://localhost:8000/api/words/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        console.log('Fetched words:', data);
      });
  }, []);
  return (
    <Container>
      <Text>Hello</Text>
    </Container>
  );
};

export default DisplayTranslation;
