import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ScrollToTop from "./component/ScrollToTop";
import Header from "./common/Header";
import Footer from "./common/Footer";
import Bg from "./common/Bg";
import Home from "./Home";
import TecBlog from "./TecBlog";
import Portfolio from "./Portfolio";
import ReactPage from "./article/ReactPage";
import VuePage from "./article/VuePage";

import AOS from "aos";
import "../../../node_modules/aos/dist/aos.css";

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
              <Route path="/portfolio" component={Portfolio} />
              <Route path="/tec-blog/react" component={ReactPage} />
              <Route path="/tec-blog/vue" component={VuePage} />
              <Bg />
            </div>
          </div>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}
