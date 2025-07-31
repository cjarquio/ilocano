'use client';
import { useState } from 'react';
import { Paper, Tabs } from '@mantine/core';
import LogIn from '../Login/LogIn';

export const AuthenticationDisplay: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('logIn');

  return (
    <Paper
      style={{ backgroundColor: 'var(--mantine-color-teal-3)' }}
      h={'50dvh'}
      w={'100%'}
      shadow="xs"
      p="md"
      withBorder
    >
      <Tabs
        color="yellow"
        radius="md"
        value={activeTab}
        onChange={setActiveTab}
      >
        <Tabs.List>
          <Tabs.Tab value="logIn">LOG IN</Tabs.Tab>
          <Tabs.Tab value="signUp">SIGN UP</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="logIn">
          <LogIn />
        </Tabs.Panel>
        <Tabs.Panel value="signUp">Second panel</Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default AuthenticationDisplay;
