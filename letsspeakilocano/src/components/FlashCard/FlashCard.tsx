import { Card, ActionIcon, Group, Title } from '@mantine/core';
import { IconRotateClockwise2 } from '@tabler/icons-react';
import { Translation } from '../DisplayTranslation/DisplayTranslation';

interface FlashCardProps {
  word: Translation;
  displayEnglish: boolean;
  handleDisplayEnglish: () => void;
}

export const FlashCard: React.FC<FlashCardProps> = (props) => {
  const { word, displayEnglish, handleDisplayEnglish } = props;

  return (
    <Card withBorder radius="md" className="flex flex-col w-xl h-sm mx-4">
      <Group justify="center" className="flex h-full items-center">
        <Title order={1}>{displayEnglish ? word.english : word.ilocano}</Title>
      </Group>
      <Group display={'flex'} justify="flex-end">
        <ActionIcon
          variant="default"
          size="lg"
          radius="md"
          onClick={handleDisplayEnglish}
        >
          <IconRotateClockwise2 size={18} />
        </ActionIcon>
      </Group>
    </Card>
  );
};
