import React from "react";
import TecBlogList from "./common/TecBlogList";
import WorksList from "./common/WorksList";

export default function Home() {
  return (
    <div className="Home">
      <article data-aos="fade" data-aos-duration="1000">
        <div className="Thoughts">
          <h2 className="HomeTitle">Thoughts in Open.β</h2>
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
        </div>
        <hr />
        <h2 data-aos="fade" data-aos-duration="1000">
          Works
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
