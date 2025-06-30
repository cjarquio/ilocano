'use client';
import { ActionIcon, Container } from '@mantine/core';
import { IconArrowLeftDashed, IconArrowRightDashed } from '@tabler/icons-react';
import { useState, useEffect } from 'react';
import { FlashCard } from '../FlashCard/FlashCard';

export interface Translation {
  id: number;
  english: string;
  ilocano: string;
  exampleSentence?: string | null;
  partOfSpeech?: string | null;
}

export const DisplayTranslation: React.FC = () => {
  const [translations, setTranslations] = useState<Translation[]>([]);
  const [translationIndex, setTranslationIndex] = useState<number>(0);
  const [displayEnglish, setDisplayEnglish] = useState<boolean>(false);

  const handleDisplayEnglish = () => {
    setDisplayEnglish((prev) => !prev);
  };

  const handleTranslationIndex = (direction: 'next' | 'prev') => {
    setTranslationIndex((prevIndex) => {
      if (direction === 'next') {
        return (prevIndex + 1) % translations.length;
      } else {
        return (prevIndex - 1 + translations.length) % translations.length;
      }
    });
  };

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
    <Container className="flex items-center w-3/4 justify-between">
      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={() => handleTranslationIndex('prev')}
      >
        <IconArrowLeftDashed size={18} />
      </ActionIcon>
      {translations.length > 0 && (
        <FlashCard
          word={translations[translationIndex]}
          displayEnglish={displayEnglish}
          handleDisplayEnglish={handleDisplayEnglish}
        />
      )}
      <ActionIcon
        variant="default"
        size="lg"
        radius="md"
        onClick={() => handleTranslationIndex('next')}
      >
        <IconArrowRightDashed size={18} />
      </ActionIcon>
    </Container>
  );
};

export default DisplayTranslation;
