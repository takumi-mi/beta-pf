import React from "react";
import List from "./react/List";
import HowToStart from "./react/HowToStart";
import HowToScss from "./react/HowToScss";

export default function ReactPage() {
  return (
    <div>
      <hr />
      <div className="article" data-aos="fade" data-aos-duration="1000">
        <List />
        <hr />
        <HowToStart />
        <hr />
        <HowToScss />
      </div>
    </div>
  );
}
