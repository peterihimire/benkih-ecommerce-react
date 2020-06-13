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
        <img src={image} alt="product" width="80px" height="80px" />
      </div>
      <div className="cart-item-text">
        <p>
          <span className="hidden-on-desk">product : </span> {name}
        </p>
      </div>
      <div className="cart-item-text">
        <p>
          <span className="hidden-on-desk">price: </span> <span>$</span> {price}
        </p>
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
          <FaTrash className="fa-trash" />
        </p>
      </div>
      <div className="cart-item-text">
        <p>
          <span className="hidden-on-desk">item total :</span> <span>$</span>
          {price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
