import { ColorSchemesSwitcher } from '@/components/color-schemes-switcher';
import DisplayTranslation from '@/components/DisplayTranslation/DisplayTranslation';
import { AppShell, AppShellHeader, AppShellMain, Group } from '@mantine/core';
import Image from 'next/image';

export default function Home() {
  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Group className="h-full px-md">
          <Image
            className="dark:invert"
            src="https://nextjs.org/icons/next.svg"
            alt="logo"
            width={100}
            height={100}
          />
          <ColorSchemesSwitcher />
        </Group>
      </AppShellHeader>
      <AppShellMain>
        <div className="flex justify-center mt-10">
          <DisplayTranslation />
        </div>
      </AppShellMain>
    </AppShell>
  );
}
