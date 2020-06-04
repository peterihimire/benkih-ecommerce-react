import React from "react";
import SimpleSlider from "./SimpleSlider";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner-center">
          <div className="left-grid">
            <div className="grid-text">
              <p>
                <span>
                  deal of <strong> the day </strong>
                </span>
              </p>
            </div>
            <div>
              <Link>view all</Link>
              <Link>buy now</Link>
            </div>
          </div>
          <div className="right-grid">
            <SimpleSlider />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
