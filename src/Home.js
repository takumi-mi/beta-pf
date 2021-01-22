import React from "react";
import TecBlogList from "./common/TecBlogList";
import WorksList from "./common/WorksList";

export default function Home() {
  return (
    <div className="Home">
      <article data-aos="fade" data-aos-duration="1000">
        <h2 class="HomeTitle">Thoughts in Open.β</h2>
        <p>"Open.β"とは試験的、試作版を意味する言葉。</p>
        <p>
          技術と表現の新しい可能性を探求することに終わりは無く
          <br />
          常に進化をし続けていくことを目的とする。
        </p>
        <p>
          また、自身の研究や開発している内容は
          <br />
          全てオープンソースとして発表する。
        </p>
        <p>
          発表した情報を元に様々なクリエイターとの
          <br />
          コラボレーションワークを実践していく。
        </p>
      </article>
      <article data-aos="fade" data-aos-duration="1000">
        <hr />
        <h2 data-aos="fade" data-aos-duration="1000">
          Portfolio
        </h2>
        <WorksList />
        <hr />
        <h2 data-aos="fade" data-aos-duration="1000">
          TecBlog
        </h2>
        <TecBlogList />
        <hr />
      </article>
    </div>
  );
}
