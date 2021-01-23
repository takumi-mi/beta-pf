import React from "react";
import { Link } from "react-scroll";

export default function List() {
  return (
    <div>
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
          Reactの導入
        </Link>
        <Link
          activeClass="active"
          to="HowToSass"
          spy={true}
          smooth={true}
          offset={-70}
          duration={800}
          className="one-half button column"
        >
          Reactでsass(scss)を使う方法
        </Link>
      </div>
    </div>
  );
}
