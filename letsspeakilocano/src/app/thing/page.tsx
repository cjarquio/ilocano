import { Header } from '@/components/Header/Header';
import Home from '@/components/Home/Home';
import { AppShell } from '@mantine/core';

export default function Thing() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Header />
      <Home />
    </AppShell>
  );
}
