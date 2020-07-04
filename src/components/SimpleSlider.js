import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ProductConsumer } from "../context";
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
      <ProductConsumer>
        {value => {
          console.log(value);
          const { dealOfDay } = value;
          console.log(dealOfDay);
          return (
            <Slider {...settings} className="slider-box">
              {dealOfDay.map(dealDay => {
                return (
                  <div className="box">
                    <div className="box-center">
                      <p>
                        <span>$ {dealDay.price}</span>{" "}
                      </p>
                    </div>
                    <div className="slider-img">
                      <img src={dealDay.image} alt="product" />
                    </div>
                  </div>
                );
              })}
            </Slider>
          );
        }}
      </ProductConsumer>
    );
  }
}
export default SimpleSlider;
