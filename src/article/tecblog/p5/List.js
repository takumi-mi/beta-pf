import React from "react";
import { Link } from "react-scroll";

export default function List() {
  return (
    <div className="row">
      <Link
        activeClass="active"
        to="HowToStart"
        spy={true}
        smooth={true}
        offset={-70}
        duration={800}
        className="one-half button column"
      >
        p5.jsの導入
      </Link>
    </div>
  );
}
