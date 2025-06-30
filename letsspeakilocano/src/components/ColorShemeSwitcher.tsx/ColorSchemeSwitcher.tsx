'use client';

import { useMantineColorScheme, ActionIcon } from '@mantine/core';
import { IconMoon, IconSun } from '@tabler/icons-react';

export function ColorSchemesSwitcher() {
  const { toggleColorScheme, colorScheme } = useMantineColorScheme();

  return (
    <ActionIcon
      variant="default"
      size="lg"
      radius="md"
      onClick={toggleColorScheme}
    >
      {colorScheme === 'dark' ? <IconMoon size={18} /> : <IconSun size={18} />}
    </ActionIcon>
  );
}
