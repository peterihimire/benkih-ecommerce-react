import React from "react";
import { Link } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="empty-cart-center">
        <div className="empty-cart-msg">
          <h1>Your cart is currently empty...</h1>
        </div>
        <Link
          to="/products"
          className="btn add-incart-btn continue-shopping-btn"
        >
          <span>
            <FaAngleLeft />
          </span>
          continue shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
