import React from "react";
import List from "./tecblog/p5/List";
import HowToStart from "./tecblog/p5/HowToStart";

export default function P5Page() {
  return (
    <div>
      <hr />
      <div class="article" data-aos="fade" data-aos-duration="1000">
        <List />
        <hr />
        <HowToStart />
      </div>
    </div>
  );
}
