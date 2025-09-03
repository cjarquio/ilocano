'use client';
import { useState } from 'react';
import { Paper, Tabs } from '@mantine/core';
import LogIn from '../Login/LogIn';
import SignUp from '../SignUp/SignUp';

export const AuthenticationDisplay: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string | null>('logIn');
  // TODO: Set value state for form inputs
  // TODO: Reset form values when switching tabs

  // TODO: Handle tab change

  return (
    <Paper h={'60dvh'} w={'100%'} shadow="xs" p="md" withBorder>
      <Tabs color="teal" radius="md" value={activeTab} onChange={setActiveTab}>
        <Tabs.List>
          <Tabs.Tab value="logIn">LOG IN</Tabs.Tab>
          <Tabs.Tab value="signUp">SIGN UP</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="logIn">
          <LogIn />
        </Tabs.Panel>
        <Tabs.Panel value="signUp">
          <SignUp />
        </Tabs.Panel>
      </Tabs>
    </Paper>
  );
};

export default AuthenticationDisplay;
