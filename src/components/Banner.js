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
                  Deal of <strong> the Day </strong>
                </span>
              </p>
            </div>
            <div className="btn-container">
              <Link className="btn dark">view all</Link>
              <Link className="btn">buy now</Link>
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
