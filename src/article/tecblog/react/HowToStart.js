import React from "react";

export default function HowToStart() {
  return (
    <div id="HowToStart">
      <h2>Reactの導入</h2>
      <ul>
        <li>
          <a
            href="https://ja.reactjs.org/tutorial/tutorial.html"
            target="_blank"
          >
            公式ドキュメント
          </a>
        </li>
        <li>
          <a
            href="https://dotinstall.com/lessons/basic_reactjs#!lessons"
            target="_blank"
          >
            ドットインストール
          </a>
        </li>
      </ul>
      <h3>使い方</h3>
      <p>node-sassをインストールしてファイルの拡張子を変更する</p>
      <h4>入力コマンド</h4>
      <pre>
        <code class="prettyprint lang-js">yarn add node-sass</code>
      </pre>
      <h4>ファイルの拡張子の変更</h4>
      <pre>
        <code>create-react-app Smple-Name</code>
      </pre>
      <h4>importの修正</h4>
      <pre>
        <code>
          import React from 'react'; {"\n"}import logo from './logo.svg'; {"\n"}
          import './App.scss'; ← App.css を App.scss へ変更
        </code>
      </pre>
    </div>
  );
}
