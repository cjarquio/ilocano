import React, { useState, useEffect } from "react";
import axios from "axios";
import { Box, Heading, Container, HStack, Text } from "@chakra-ui/react";
import AppBar from "./AppBar";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

interface AppWrapperProps {
  children: React.ReactElement;
}

const AppWrapper: React.FC<AppWrapperProps> = (props: AppWrapperProps) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    client
      .get("/api/user/")
      .then((res) => {
        const fullName =
          res.data.user.first_name + " " + res.data.user.last_name;
        setUser(fullName);
      })
      .catch((e) => console.log(e));
  }, [user]);

  return (
    <Box>
      <AppBar fullName={user} />
      {props.children}
    </Box>
  );
};

export default AppWrapper;
