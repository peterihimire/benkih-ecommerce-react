import React from "react";
import CartColumns from "../Cart/CartColumns";
import EmptyCart from "../Cart/EmptyCart";
import CartList from "../Cart/CartList";
import CartTotals from "../Cart/CartTotals";
import ClearCartBtn from "../Cart/ClearCartBtn";
import { ProductConsumer } from "../../context";

const Cart = props => {
  console.log(props);
  const { history } = props;
  console.log(history);
  return (
    <section className="cart">
      <div className="cart-center">
        <ProductConsumer>
          {value => {
            console.log(value.cart, value);
            console.log(props.history);
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
                <ClearCartBtn />
                <CartTotals historyProp={history} />
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
