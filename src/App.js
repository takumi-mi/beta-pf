import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Bg from "./common/Bg";
import Home from "./Home";
import TecBlog from "./TecBlog";
import Portfolio from "./Portfolio";
import ReactPage from "./article/ReactPage";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <div class="main">
          <div class="container ">
            <Route exact path="/" component={Home} />
            <Route path="/tec-blog" component={TecBlog} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/react" component={ReactPage} />
            <Bg />
          </div>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
