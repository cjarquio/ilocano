import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Heading,
  Container,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";

interface AppBarProps {
  /** Full name of user */
  fullName?: string;
  loggedIn?: boolean;
  logoutCallback: () => void;
  loggingIn: boolean;
  logCallback: () => void;
}

const AppBar: React.FC<AppBarProps> = (props: AppBarProps) => {
  const {
    fullName,
    loggedIn = false,
    loggingIn = false,
    logCallback,
    logoutCallback,
  } = props;

  return (
    <Box width={"100%"} sx={{ borderBottom: "0.1rem solid black" }}>
      <Container padding={"1rem"}>
        <HStack>
          <Text>Hello, {fullName}</Text>
          {loggedIn ? (
            <Button onClick={logoutCallback}>Logout</Button>
          ) : (
            <>
              {loggingIn ? (
                <Button onClick={logCallback}>Register</Button>
              ) : (
                <Button onClick={logCallback}>Login</Button>
              )}
            </>
          )}
        </HStack>
      </Container>
    </Box>
  );
};

export default AppBar;
