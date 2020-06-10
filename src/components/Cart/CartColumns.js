import React from "react";

const CartColumns = () => {
  return (
    <div className="cart-columns">
      <div className="cart-columns-text">
        <p>products</p>
      </div>
      <div className="cart-columns-text">
        <p>name of product</p>
      </div>
      <div className="cart-columns-text">
        <p>price</p>
      </div>
      <div className="cart-columns-text">
        <p>quantity</p>
      </div>
      <div className="cart-columns-text">
        <p>remove</p>
      </div>
      <div className="cart-columns-text">
        <p>total</p>
      </div>
    </div>
  );
};

export default CartColumns;
