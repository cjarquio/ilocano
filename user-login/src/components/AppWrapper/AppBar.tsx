import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Container, HStack, Text } from "@chakra-ui/react";

interface AppBarProps {
  /** Full name of user */
  fullName?: string;
}

const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  const { fullName } = props;

  return (
    <Box width={"100%"} sx={{ borderBottom: "0.1rem solid black" }}>
      <Container padding={"1rem"}>
        <HStack>
          <Text>{fullName}</Text>
        </HStack>
      </Container>
    </Box>
  );
};

export default AppBar;
