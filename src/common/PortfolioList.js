import React from "react";
import { Link } from "react-router-dom";

export default function Portfolio() {
  return (
    <div>
      <div class="row">
        <div
          data-aos="fade-right"
          data-aos-duration="800"
          data-aos-delay="100"
          class="one-half column"
        >
          <Link to="/portfolio/engineer" className="button column">
            engineer
          </Link>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="800"
          data-aos-delay="300"
          class="one-half column"
        >
          <Link to="/portfolio/design" className="button column">
            design
          </Link>
        </div>
      </div>
    </div>
  );
}
