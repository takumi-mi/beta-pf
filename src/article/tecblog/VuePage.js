import React from "react";
import List from "./vue/List";
import HowToStart from "./vue/HowToStart";

export default function VuePage() {
  return (
    <div>
      <hr />
      <div className="article" data-aos="fade" data-aos-duration="1000">
        <List />
        <hr />
        <HowToStart />
      </div>
    </div>
  );
}
