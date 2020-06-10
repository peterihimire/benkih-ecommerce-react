import React from "react";
import CartItem from "../Cart/CartItem";

function CartList(props) {
  // const { value } = props.value;
  console.log(props);
  const { valueProp } = props;
  const { cart } = props.valueProp;
  console.log(valueProp, cart);
  return (
    <div className="cart-list">
      <div className="cart-list-center">
        {cart.map(item => {
          return (
            <CartItem key={item.id} itemList={item} valuePassed={valueProp} />
          );
        })}
      </div>
    </div>
  );
}

export default CartList;
