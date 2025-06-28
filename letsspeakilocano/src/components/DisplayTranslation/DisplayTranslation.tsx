'use client';
import { Container, Text } from '@mantine/core';
import { useState, useEffect } from 'react';

interface Translation {
  id: number;
  english: string;
  ilocano: string;
  exampleSentence?: string | null;
  partOfSpeech?: string | null;
}

export const DisplayTranslation: React.FC = () => {
  const [translations, setTranslations] = useState<Translation[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/words/')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setTranslations(data);
      });
  }, []);

  return (
    <Container>
      {translations.map((translation) => (
        <Container key={translation.id} style={{ marginBottom: '20px' }}>
          <Text size="xl">
            {translation.ilocano} - {translation.english}
          </Text>
        </Container>
      ))}
    </Container>
  );
};

export default DisplayTranslation;
