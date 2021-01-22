import React from "react";
import List from "./css/List";
import HowToStart from "./css/HowToStart";

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
