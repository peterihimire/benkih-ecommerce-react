import React from "react";

const CartColumns = () => {
  return (
    <div className="cart-columns">
      <div className="cart-columns-center">
        <div className="cart-columns-item">
          <p>products</p>
        </div>
        <div className="cart-columns-item">
          <p>product name</p>
        </div>
        <div className="cart-columns-item">
          <p>price</p>
        </div>
        <div className="cart-columns-item">
          <p>quantity</p>
        </div>
        <div className="cart-columns-item">
          <p>remove</p>
        </div>
        <div className="cart-columns-item">
          <p>total</p>
        </div>
      </div>
    </div>
  );
};

export default CartColumns;
