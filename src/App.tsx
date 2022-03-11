import "./App.css";

import Main from "./Components/Main";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./Components/About";
import Books from "./Components/Books";
// import Collage from "./Components/Collage";
// import Admin from "./Components/Admin";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about+contact">
          <About />
        </Route>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
