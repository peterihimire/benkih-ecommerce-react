import React from "react";
import CartColumns from "../Cart/CartColumns";
import EmptyCart from "../Cart/EmptyCart";
import CartList from "../Cart/CartList";
import { ProductConsumer } from "../../context";

const Cart = () => {
  return (
    <section className="cart">
      <div className="cart-center">
        <ProductConsumer>
          {value => {
            console.log(value.cart, value);
            const { cart } = value;
            console.log(cart);
            // if (cart.length > 0) {
            //   return (
            //     <>
            //       <div className="cart-title">
            //         <h1>Your Cart</h1>
            //       </div>
            //       <CartColumns />
            //     </>
            //   );
            // } else {
            //   return <EmptyCart />;
            // }

            return cart.length > 0 ? (
              <>
                <div className="cart-title">
                  <h1>Your Cart</h1>
                </div>
                <CartColumns />
                <CartList valueProp={value} />
              </>
            ) : (
              <EmptyCart />
            );
          }}
        </ProductConsumer>
      </div>
    </section>
  );
};

export default Cart;
