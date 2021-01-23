import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="container">
      <header className="row">
        <Link to="/" className="one-half column">
          <h1 className="Title">
            Open.β
            <span>portfolio site and technical blog.</span>
          </h1>
        </Link>
        <ul className="one-half column List">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/works">Works</Link>
          </li>
          <li>
            <Link to="/biography">Biography</Link>
          </li>
          <li>
            <Link to="/tec-blog">TecBlog</Link>
          </li>
        </ul>
      </header>
    </div>
  );
}
