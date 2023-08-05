import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppWrapper/AppBar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";
import AppWrapper from "./components/AppWrapper/AppWrapper";

function App() {
  const links = ["hi", "there", "hello"];
  return (
    <ChakraProvider>
      <AppWrapper>
        <Login />
      </AppWrapper>
    </ChakraProvider>
  );
}

export default App;
