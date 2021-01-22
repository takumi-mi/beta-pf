import React from "react";
import ReactDOM from "react-dom";

import "./_assets/scss/normalize.scss";
import "./_assets/scss/skeleton.scss";
import "./_assets/scss/styles.scss";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
