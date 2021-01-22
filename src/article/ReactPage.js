import React from "react";
import List from "./react/List";
import HowToStart from "./react/HowToStart";
import HowToScss from "./react/HowToScss";

export default function ReactPage() {
  return (
    <div class="article">
      <List />
      <hr />
      <HowToStart />
      <hr />
      <HowToScss />
    </div>
  );
}
