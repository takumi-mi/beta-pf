import React from "react";
import Header from "./common/Header";
import List from "./article/react/List";
import HowToStart from "./article/react/HowToStart";
import HowToScss from "./article/react/HowToScss";

export default function ReactPage() {
  return (
    <div>
      <Header />
      <List />
      <HowToStart />
      <HowToScss />
    </div>
  );
}
