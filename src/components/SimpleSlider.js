import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../images/product1.png";
import img2 from "../images/product8.png";
import img5 from "../images/product9.png";
import img6 from "../images/product6.png";
import img7 from "../images/product7.png";

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
          <div className="box-center">
            <p>
              <span>$ 499.99</span>{" "}
            </p>
          </div>
          <div className="slider-img">
            <img src={img7} alt="product" />
          </div>
        </div>
        <div className="box">
          <div className="box-center">
            <p>
              <span>$ 110.99</span>{" "}
            </p>
          </div>
          <div className="slider-img">
            <img src={img1} alt="product" />
          </div>
        </div>
        <div className="box">
          <div className="box-center">
            <p>
              <span>$ 110.99</span>{" "}
            </p>
          </div>
          <div className="slider-img">
            <img src={img2} alt="product" />
          </div>
        </div>
        <div className="box">
          <div className="box-center">
            <p>
              <span>$ 110.99</span>{" "}
            </p>
          </div>
          <div className="slider-img">
            <img src={img6} alt="product" />
          </div>
        </div>
        <div className="box">
          <div className="box-center">
            <p>
              <span>$ 110.99</span>{" "}
            </p>
          </div>
          <div className="slider-img">
            <img src={img5} alt="product" />
          </div>
        </div>
      </Slider>
    );
  }
}
export default SimpleSlider;
