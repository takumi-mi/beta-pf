import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <div class="row">
        <Link to="web" class="one-half column button">
          Web
        </Link>
        <Link to="art" class="one-half column button">
          Art
        </Link>
      </div>
      <div class="row">
        <Link to="3dcg" class="one-half column button">
          3DCG
        </Link>
      </div>
    </div>
  );
}
