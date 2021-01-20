import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./Home";
import ReactPage from "./ReactPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <div class="container">
          <Route exact path="/" component={Home} />
          <Route path="/react" component={ReactPage} />
        </div>
      </Router>
    </div>
  );
}
