import React from "react";
import StackGrid, { transitions } from "react-stack-grid";

const { scaleUp } = transitions;

export default function ImageGridList() {
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
            key="key1"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/2dcg/works1.png")} />
          </a>
          <a
            key="key2"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/2dcg/works2.png")} />
          </a>
          <a
            key="key3"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/2dcg/works3.png")} />
          </a>
          <a
            key="key4"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/2dcg/works4.png")} />
          </a>
          <a
            key="key5"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/2dcg/works5.png")} />
          </a>
          <a
            key="key6"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/2dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/2dcg/works6.png")} />
          </a>
          <a
            key="key7"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/3dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/3dcg/works1.png")} />
          </a>
          <a
            key="key8"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/3dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/3dcg/works2.png")} />
          </a>
          <a
            key="key9"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/3dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/3dcg/works3.png")} />
          </a>
          <a
            key="key10"
            href="https://www.pinterest.jp/TakumiSasamori_OpenBeta/works/3dcg/"
            target="_blank"
          >
            <img src={require("../../_assets/works/design/3dcg/works4.jpg")} />
          </a>
        </StackGrid>
      </div>
    </div>
  );
}
