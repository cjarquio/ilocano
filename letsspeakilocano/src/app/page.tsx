// import DisplayTranslation from '@/components/DisplayTranslation/DisplayTranslation';
import { Header } from '@/components/Header/Header';
import Landing from '@/components/Landing/Landing';
import { AppShell } from '@mantine/core';

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Header />
      <Landing />
    </AppShell>
  );
}
