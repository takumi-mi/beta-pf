import React from "react";
import StackGrid from "react-stack-grid";

export default function ReactPage() {
  return (
    <div>
      <div className="imgList">
        <hr />
        <StackGrid columnWidth={"33.33%"} gutterWidth={20} gutterHeight={30}>
          <a href="https://pin.it/hLPBSbf" target="_blank">
            <img
              key="key1"
              src={require("../../_assets/works/design/2dcg/works1.png")}
            />
          </a>
          <a href="https://pin.it/4DnxE2P" target="_blank">
            <img
              key="key2"
              src={require("../../_assets/works/design/2dcg/works2.png")}
            />
          </a>
          <a href="https://pin.it/4DnxE2P" target="_blank">
            <img
              key="key3"
              src={require("../../_assets/works/design/2dcg/works3.png")}
            />
          </a>
          <a href="https://pin.it/4DnxE2P" target="_blank">
            <img
              key="key4"
              src={require("../../_assets/works/design/2dcg/works4.png")}
            />
          </a>
          <a href="https://pin.it/4DnxE2P" target="_blank">
            <img
              key="key5"
              src={require("../../_assets/works/design/2dcg/works5.png")}
            />
          </a>
          <img
            key="key6"
            src={require("../../_assets/works/design/2dcg/works6.png")}
          />
        </StackGrid>
      </div>
    </div>
  );
}
