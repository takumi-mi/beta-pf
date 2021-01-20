import React from "react";
import ReactDOM from "react-dom";

import "./_assets/normalize.scss";
import "./_assets/skeleton.scss";
import "./_assets/styles.scss";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
