import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { ProductConsumer } from "../context";

function Product(props) {
  const { id, name, price, images, inCart } = props.product;
  // console.log(id, name, price);
  return (
    <article className="product">
      <div
        className="img-container"
        onClick={() => console.log("img-container clicked")}
      >
        <Link to="/details">
          <img src={images[0]} alt="product" />
        </Link>
        <button
          className="cart-btn"
          disabled={inCart ? true : false}
          onClick={() => {
            console.log("added to the cart");
          }}
        >
          {inCart ? <p disabled>in cart</p> : <FaCartPlus />}
        </button>
      </div>
      <div className="product-footer">
        <p>{name}</p>
        <h3>
          <span>$ </span>
          {price}
        </h3>
      </div>
    </article>
  );
}

export default Product;
