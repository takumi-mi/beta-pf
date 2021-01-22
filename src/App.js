import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollToTop from "./component/ScrollToTop";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Bg from "./common/Bg";
import Home from "./Home";
import TecBlog from "./TecBlog";
import Works from "./Works";
import ReactPage from "./article/tecblog/ReactPage";
import VuePage from "./article/tecblog/VuePage";
import P5Page from "./article/tecblog/P5Page";
import CSSPage from "./article/tecblog/CSSPage";
import EngineerPage from "./article/works/EngineerPage";
import DesignPage from "./article/works/DesignPage";

import AOS from "aos";

export default function App() {
  AOS.init({
    once: true
  });

  return (
    <div className="App">
      <Router>
        <ScrollToTop>
          <Header />
          <div class="main">
            <div class="container">
              <Route exact path="/" component={Home} />
              <Route path="/tec-blog" component={TecBlog} />
              <Route path="/works" component={Works} />
              {/* ▼tecblog▼ */}
              <Route path="/tec-blog/react" component={ReactPage} />
              <Route path="/tec-blog/vue" component={VuePage} />
              <Route path="/tec-blog/p5" component={P5Page} />
              <Route path="/tec-blog/css" component={CSSPage} />
              {/* ▼works▼ */}
              <Route path="/works/engineer" component={EngineerPage} />
              <Route path="/works/design" component={DesignPage} />
              <Bg />
            </div>
          </div>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}
