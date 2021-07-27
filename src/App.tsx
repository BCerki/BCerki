import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";

function App() {
  return (
    <div className="App">
      <header></header>
      <NavBar />
      <Banner />
      <Main />
    </div>
  );
}

export default App;
