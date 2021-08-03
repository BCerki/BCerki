import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import Main from "./Components/Main";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./Components/About";
import Books from "./Components/Books";
import Contact from "./Components/Contact";
import Collage from "./Components/Collage";

function App() {
  return (
    <Router>
      <div>
        <header>
          <div className="nav-bar-name">Brianna Cerkiewicz</div>
          <nav className="nav-bar">
            <ul>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Banner />
        <Collage />
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/books">
            <Books />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
