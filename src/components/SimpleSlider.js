import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/room-1.jpeg";
import img2 from "../images/room-2.jpeg";
import img3 from "../images/room-3.jpeg";
import img4 from "../images/room-4.jpeg";
import img5 from "../images/room-5.jpeg";
import img6 from "../images/room-6.jpeg";
import img7 from "../images/room-7.jpeg";

// // Custom arrow next and prev buttons
// const NextArrow = props => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{
//         ...style,
//         display: "block",
//         background: "black"
//       }}
//       onClick={onClick}
//     />
//   );
// };
// const PrevArrow = props => {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "black" }}
//       onClick={onClick}
//     />
//   );
// };

class SimpleSlider extends React.Component {
  render() {
    const settings = {
      accessibility: true,
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slideToScroll: 1,
      centerMode: true,
      fade: true,
      easing: "linear",
      arrows: true,
      autoplaySpeed: 2000,
      autoplay: true,
      centerPadding: "10px"
      // nextArrow: <NextArrow />,
      // prevArrow: <PrevArrow />
    };
    return (
      <Slider {...settings} className="slider-box">
        <div className="box">
          <p>
            $ <span>11</span>{" "}
          </p>
          <img src={img1} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>65</span>{" "}
          </p>
          <img src={img2} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>35</span>{" "}
          </p>
          <img src={img3} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>62</span>{" "}
          </p>
          <img src={img4} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>25</span>{" "}
          </p>
          <img src={img5} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>85</span>{" "}
          </p>
          <img src={img6} alt="product" />
        </div>
        <div className="box">
          <p>
            $ <span>15</span>{" "}
          </p>
          <img src={img7} alt="product" />
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
