import React from "react";
import logo from "./logo.svg";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";

function App() {
  const links = ["hi", "there", "hello"];
  return (
    <div className="App">
      <AppBar
        appName="Test"
        logoSrc="https://assets.pokemon.com/assets/cms2/img/pokedex/full/181.png"
        links={links}
      />
    </div>
  );
}

export default App;
