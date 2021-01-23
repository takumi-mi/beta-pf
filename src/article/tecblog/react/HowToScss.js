import React from "react";

export default function HowToScss() {
  return (
    <div id="HowToSass">
      <h2 className=".container-fluid">Reactでsass(scss)を使う方法</h2>
      <ul>
        <li>
          <a
            href="https://qiita.com/Tateishi0819/items/c105693da353a5a0c776"
            target="_blank"
          >
            参照サイト
          </a>
        </li>
      </ul>
      <h3>使い方</h3>
      <p>node-sassをインストールしてファイルの拡張子を変更する</p>
      <h4>入力コマンド</h4>
      <pre>
        <code>yarn add node-sass</code>
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
