import DisplayTranslation from '@/components/DisplayTranslation/DisplayTranslation';
import { Header } from '@/components/Header/Header';
import { AppShell, AppShellMain } from '@mantine/core';

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <Header />
      <AppShellMain>
        <div className="flex justify-center mt-10">
          <DisplayTranslation />
        </div>
      </AppShellMain>
    </AppShell>
  );
}
