import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";
import Register from "./components/Register/Register";
import Login from "./components/Login/Login";

function App() {
  const links = ["hi", "there", "hello"];
  return (
    <ChakraProvider>
      <Login />
    </ChakraProvider>
  );
}

export default App;
