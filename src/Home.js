import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <div class="row">
        <Link to="/portfolio" class="one-half column button">
          Portfolio
        </Link>
        <Link to="/tec-blog" class="one-half column button">
          TecBlog
        </Link>
      </div>
    </div>
  );
}
