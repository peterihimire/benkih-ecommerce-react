import React from "react";
import { FaTrash } from "react-icons/fa";

const CartItem = props => {
  console.log(props);
  const { itemList, valuePassed } = props;
  const { id, slug, name, image, price, count, total } = itemList;
  const {
    incrementHandler,
    decrementHandler,
    removeProductHandler,
    clearCartHandler
  } = valuePassed;
  console.log(id, slug, name, price);
  console.log(itemList, valuePassed);
  return (
    <div className="cart-item">
      <div className="cart-item-text">
        <img src={image} alt="product" width="100px" height="100px" />
      </div>
      <div className="cart-item-text">
        <p>{name}</p>
      </div>
      <div className="cart-item-text">
        <p>{price}</p>
      </div>
      <div className="cart-item-text">
        <div className="cart-item-btn-group">
          <span className="cart-item-btn">-</span>
          <span className="cart-item-btn">{count}</span>
          <span className="cart-item-btn">+</span>
        </div>
      </div>
      <div className="cart-item-text">
        <p>
          <FaTrash />
        </p>
      </div>
      <div className="cart-item-text">
        <p>{count}</p>
      </div>
    </div>
  );
};

export default CartItem;
