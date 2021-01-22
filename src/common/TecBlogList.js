import React from "react";
import { Link } from "react-router-dom";

export default function TecBlog() {
  return (
    <div>
      <div class="row">
        <div
          class="one-half column"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <Link to="/tec-blog/react" class="button column">
            react
          </Link>
        </div>
        <div
          class="one-half column"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <Link to="/tec-blog/vue" class="button column">
            vue
          </Link>
        </div>
      </div>
      <div class="row">
        <div
          class="one-half column"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <Link to="/tec-blog/p5" class="button column">
            p5
          </Link>
        </div>
        <div
          class="one-half column"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="700"
        >
          <Link to="/tec-blog/css" class="button column">
            css
          </Link>
        </div>
      </div>
    </div>
  );
}
