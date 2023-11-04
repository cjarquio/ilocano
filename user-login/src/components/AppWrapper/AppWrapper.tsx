import React from "react";
import { Box, Typography, Button, AppBar, Toolbar } from "@mui/material";

interface AppWrapperProps {
  /** Full name of user */
  fullName?: string;
  loggedIn?: boolean;
  logoutCallback: () => void;
  loggingIn: boolean;
  logCallback: () => void;
  children?: React.ReactElement | number | string;
}

const AppWrapper: React.FC<AppWrapperProps> = (props: AppWrapperProps) => {
  const {
    fullName,
    loggedIn = false,
    loggingIn = false,
    logCallback,
    logoutCallback,
    children,
  } = props;

  console.log(fullName)

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {loggedIn && `Hello, ${fullName}`}
          </Typography>
          {loggedIn ? (
            <Button color="inherit" onClick={logoutCallback}>Logout</Button>
          ) : (
            <Button color="inherit" onClick={logCallback}>
              {loggingIn ? "Register" : "Log In"}
            </Button>
          )}
        </Toolbar>
      </AppBar>
      {children}
      <>Footer will be here</>
    </Box>
  );
};

export default AppWrapper;
