'use client';
import { useState } from 'react';
import { Burger, Container, Group, Image } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { ColorSchemesSwitcher } from '../ColorShemeSwitcher.tsx/ColorSchemeSwitcher';

const links = [{ link: '/tools', label: 'Tools' }];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Image src={'/AgsaoTayoLogo.png'} alt="Agsao Logo" w={60} h={60} />
        <Group gap={5} visibleFrom="xs">
          {items}
          <ColorSchemesSwitcher />
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
};
