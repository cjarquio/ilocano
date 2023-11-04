import React, { useEffect, useState } from "react";
import AppWrapper from "./components/AppWrapper/AppWrapper";
import { Register } from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import axios from "axios";
import { Box } from "@mui/material";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState<string | undefined>();

  // const getUserInfo = () => {
  //    client
  //     .get("/api/user/")
  //     .then((res) => {
  //       const fullName =
  //         res.data.user.first_name + " " + res.data.user.last_name;
  //       setUser(fullName);
  //       setLoggedIn(true);
  //     })
  //     .catch((e) => setUser(""));
  // }

  useEffect(() => {
    client
      .get("/api/user/")
      .then((res) => {
        const fullName =
          res.data.user.first_name + " " + res.data.user.last_name;
        setUser(fullName);
        setLoggedIn(true);
      })
      .catch((e) => setUser(""));
  });

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };

  const logCallback = () => {
    setLoggingIn(!loggingIn);
  };

  const submitLogout = () => {
    client
      .post("/api/logout/", { withCredentials: true })
      .then(function (res) {
        setUser("");
        handleLogin();
      })
      .catch((e) => console.error(e));
  };

  return (
    <AppWrapper
      fullName={user}
      loggedIn={loggedIn}
      logoutCallback={submitLogout}
      logCallback={logCallback}
      loggingIn={loggingIn}
    >
      <Box padding={"0.5rem"}>
        {loggedIn ? (
          <>Hello</>
        ) : loggingIn ? (
          <Login loginCallback={handleLogin} />
        ) : (
          <Register loginCallback={handleLogin} />
        )}
      </Box>
    </AppWrapper>
  );
}

export default App;
