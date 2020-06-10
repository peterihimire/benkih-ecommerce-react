import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const EmptyCart = () => {
  return (
    <div className="empty-cart">
      <div className="empty-cart-center">
        <div>
          <h1>your cart is currently empty</h1>
        </div>
        <Link to="/products" className="btn add-incart-btn">
          <span>
            <FaArrowLeft />
          </span>
          continue shopping
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;
