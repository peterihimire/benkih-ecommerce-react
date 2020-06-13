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
        <img
          src={image}
          alt="product"
          style={{ width: "80px", height: "80px" }}
        />
      </div>
      <div className="cart-item-text">
        <strong>
          <span className="hidden-on-desk">product : </span> {name}
        </strong>
      </div>
      <div className="cart-item-text">
        <strong>
          <span className="hidden-on-desk">price: </span> <span>$</span> {price}
        </strong>
      </div>
      <div className="cart-item-text">
        <div className="cart-item-btn-group">
          <span
            className="cart-item-btn"
            onClick={() => decrementHandler(slug)}
          >
            -
          </span>
          <span className="cart-item-btn">{count}</span>
          <span
            className="cart-item-btn"
            onClick={() => incrementHandler(slug)}
          >
            +
          </span>
        </div>
      </div>
      <div className="cart-item-text">
        <div onClick={() => removeProductHandler(slug)}>
          <FaTrash className="fa-trash" />
        </div>
      </div>
      <div className="cart-item-text">
        <strong>
          <span className="hidden-on-desk">item total :</span> <span>$</span>
          {price}
        </strong>
      </div>
    </div>
  );
};

export default CartItem;
