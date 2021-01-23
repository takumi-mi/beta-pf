import React from "react";
import StackGrid from "react-stack-grid";

export default function ReactPage() {
  return (
    <div>
      <div className="imgList">
        <hr />
        <StackGrid
          columnWidth={"33.33%"}
          gutterWidth={20}
          gutterHeight={30}
          duration={800}
          appearDelay={70}
        >
          <a
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img
              key="key1"
              src={require("../../_assets/works/design/2dcg/works1.png")}
            />
          </a>
        </StackGrid>
      </div>
    </div>
  );
}
