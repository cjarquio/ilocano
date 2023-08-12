import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";

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
      <Typography>Hello, {fullName}</Typography>
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
    </Box>
  );
};

export default AppBar;
