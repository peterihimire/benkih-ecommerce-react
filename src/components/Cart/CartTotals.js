import React from "react";
import { ProductConsumer } from "../../context";

const CartTotals = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        const { cartTotal, cartTax, cartSubTotal } = value;
        console.log(cartTotal, cartSubTotal, cartTax);
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
