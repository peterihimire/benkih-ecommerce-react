import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

function Product(props) {
  const { id, name, price, images } = props.product;
  // console.log(id, name, price);
  return (
    <article className="product">
      <div
        className="img-container"
        onClick={console.log("img-container clicked")}
      >
        <Link to="/details">
          <img src={images[0]} alt="product" />
        </Link>
      </div>
    </article>
  );
}

export default Product;
