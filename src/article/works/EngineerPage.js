import React from "react";
import HowToStart from "../tecblog//react/HowToStart";
import HowToScss from "../tecblog/react/HowToScss";

export default function ReactPage() {
  return (
    <div>
      <hr />
      <div class="article" data-aos="fade" data-aos-duration="1000">
        <hr />
        <HowToStart />
        <hr />
        <HowToScss />
      </div>
    </div>
  );
}
