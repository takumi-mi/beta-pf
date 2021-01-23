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
          <a href="https://dots-bg.vercel.app/" target="_blank">
            <img
              key="key1"
              src={require("../../_assets/works/engeneer/frontend/works1.png")}
            />
          </a>
          <a
            href="https://codesandbox.io/s/compassionate-sun-17i5e"
            target="_blank"
          >
            <img
              key="key2"
              src={require("../../_assets/works/design/2dcg/works2.png")}
            />
          </a>
          <div>
            <img
              key="ke3"
              src={require("../../_assets/works/engeneer/frontend/works2.png")}
            />
          </div>
          <a href="https://siaflab.jp/events/p7079/" target="_blank">
            <img
              key="key4"
              src={require("../../_assets/works/engeneer/frontend/works3.png")}
            />
          </a>
          <a href="https://siaflab.jp/events/p7079/" target="_blank">
            <img
              key="key5"
              src={require("../../_assets/works/engeneer/frontend/works4.jpg")}
            />
          </a>
          <a
            href="https://codesandbox.io/s/css3-text-distortion-animation-effects-epuio"
            target="_blank"
          >
            <img
              key="key6"
              src={require("../../_assets/works/engeneer/frontend/works5.png")}
            />
          </a>
        </StackGrid>
      </div>
    </div>
  );
}
