import React from "react";
import logo from "./logo.svg";
import { Box, Heading, Container, HStack, Text } from "@chakra-ui/react";

interface AppBarProps {
  /** Name of application */
  appName?: string;
  /** Source of logo from either file system or link */
  logoSrc?: string;
  /** Links to other pages on site */
  links?: string[];
}

const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  const { appName, logoSrc, links } = props;
  return (
    <Box width={"100%"} sx={{ backgroundColor: "blue" }}>
      <Container padding={"1rem"}>
        <HStack>
          <Box as="img" src={logoSrc} height={"10%"} width={"10%"} />
          <Heading as={"h2"}>{appName}</Heading>
          {links?.map((link) => {
            return <Text key={link}>{link}</Text>;
          })}
        </HStack>
      </Container>
    </Box>
  );
};

export default AppBar;
