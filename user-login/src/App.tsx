import React, { useEffect, useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import AppBar from "./components/AppBar/AppBar";
import {Register} from "./components/Register/Register";
import { Login } from "./components/Login/Login";
import axios from "axios";

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";
axios.defaults.withCredentials = true;

const client = axios.create({
  baseURL: "http://127.0.0.1:8000/",
});

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    client
      .get("/api/user/")
      .then((res) => {
        const fullName =
          res.data.user.first_name + " " + res.data.user.last_name;
        setUser(fullName);
      })
      .catch((e) => setUser(""));
  }, [user]);

  const handleLogin = () => {
    setLoggedIn(!loggedIn);
  };
  
  const logCallback = () => {
    setLoggingIn(!loggingIn)
  }

  const submitLogout = () => {
    client
      .post("/api/logout/", { withCredentials: true })
      .then(function (res) {
        setUser("")
        handleLogin();
      })
      .catch((e) => console.error(e));
  };

  return (
    <ChakraProvider>
      <AppBar
        fullName={user}
        loggedIn={loggedIn}
        logoutCallback={submitLogout}
        logCallback={logCallback}
        loggingIn={loggingIn}
      />
      {loggedIn ? <>Hello</> : loggingIn ? <Login  loginCallback={handleLogin} /> : <Register loginCallback={handleLogin} />}
    </ChakraProvider>
  );
}

export default App;
