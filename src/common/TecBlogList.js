import React from "react";
import { Link } from "react-router-dom";

export default function TecBlog() {
  return (
    <div>
      <div className="row">
        <div
          className="one-half column"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
        >
          <Link to="/tec-blog/react" className="button column">
            react
          </Link>
        </div>
        <div
          className="one-half column"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <Link to="/tec-blog/vue" className="button column">
            vue
          </Link>
        </div>
      </div>
      <div className="row">
        <div
          className="one-half column"
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="500"
        >
          <Link to="/tec-blog/p5" className="button column">
            p5
          </Link>
        </div>
        <div
          className="one-half column"
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="700"
        >
          <Link to="/tec-blog/css" className="button column">
            css
          </Link>
        </div>
      </div>
    </div>
  );
}
