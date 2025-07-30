'use client';
import { useState } from 'react';
import { Paper, Tabs } from '@mantine/core';

export const AuthenticationDisplay: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('logIn');

  return (
    <Paper shadow="xs" p="md" withBorder>
      <Tabs color="teal" radius="md" value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="logIn">First tab</Tabs.Tab>
          <Tabs.Tab value="signUp">Second tab</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="logIn">First panel</Tabs.Panel>
        <Tabs.Panel value="signUp">Second panel</Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default AuthenticationDisplay;
