import React from "react";
import StackGrid, { transitions } from "react-stack-grid";

const { scaleUp } = transitions;

export default function ReactPage() {
  return (
    <div>
      <div className="imgList">
        <hr />
        <StackGrid
          appear={scaleUp.appear}
          appeared={scaleUp.appeared}
          enter={scaleUp.enter}
          entered={scaleUp.entered}
          leaved={scaleUp.leaved}
          columnWidth={"33.33%"}
          gutterWidth={20}
          gutterHeight={30}
          duration={800}
          appearDelay={100}
        >
          <a
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img
              key="key1"
              src={require("../../_assets/works/design/2dcg/works2.png")}
            />
          </a>
        </StackGrid>
      </div>
    </div>
  );
}
