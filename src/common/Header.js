import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <header class="row">
        <h1 class="one-half column">
          <Link to="/">Takumi</Link>
        </h1>
        <ul class="one-half column">
          <li class="one-half column">
            <Link to="/">Home</Link>
          </li>
          <li class="one-half column">
            <Link to="/react">React.js</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
