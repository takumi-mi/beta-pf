import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div class="container">
      <header class="row">
        <Link to="/" class="one-half column">
          <h1 class="Title">
            ver.β
            <span>portfolio site and technical blog.</span>
          </h1>
        </Link>
        <ul class="one-half column List">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Prtfolio</Link>
          </li>
          <li>
            <Link to="/tec-blog">TecBlog</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
