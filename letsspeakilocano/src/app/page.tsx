import { ColorSchemesSwitcher } from '@/components/ColorShemeSwitcher.tsx/ColorSchemeSwitcher';
import DisplayTranslation from '@/components/DisplayTranslation/DisplayTranslation';
import { AppShell, AppShellHeader, AppShellMain } from '@mantine/core';

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <ColorSchemesSwitcher />
      </AppShellHeader>
      <AppShellMain>
        <div className="flex justify-center mt-10">
          <DisplayTranslation />
        </div>
      </AppShellMain>
    </AppShell>
  );
}
