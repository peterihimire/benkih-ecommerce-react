import React from "react";
import { ProductConsumer } from "../../context";
import PayPalButton from "../Cart/PayPalButton";

const CartTotals = props => {
  const { historyProp } = props;
  console.log(props, historyProp);
  return (
    <ProductConsumer>
      {value => {
        // console.log(props.historyProp);
        console.log(value);
        const { cartTotal, cartTax, cartSubTotal, clearCartHandler } = value;
        console.log(cartTotal, cartSubTotal, cartTax, clearCartHandler);
        return (
          <>
            <div className="cart-totals">
              <div className="cart-totals-center">
                <div className="cart-totals-container">
                  <h5>
                    <span>subtotal :</span> <strong>$ {cartSubTotal}</strong>
                  </h5>
                  <h5>
                    <span>tax :</span> <strong>$ {cartTax}</strong>
                  </h5>
                  <h5>
                    <span>total :</span> <strong>$ {cartTotal}</strong>
                  </h5>
                  <PayPalButton
                    history={props}
                    total={cartTotal}
                    emptyCart={clearCartHandler}
                  />
                </div>
              </div>
            </div>
          </>
        );
      }}
    </ProductConsumer>
  );
};

export default CartTotals;
