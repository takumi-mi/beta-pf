import React from "react";
import List from "./tecblog/vue/List";
import HowToStart from "./tecblog/vue/HowToStart";

export default function VuePage() {
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
