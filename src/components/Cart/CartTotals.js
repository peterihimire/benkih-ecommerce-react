import React from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        const { cartTotal, cartTax, cartSubTotal, clearCartHandler } = value;
        console.log(cartTotal, cartSubTotal, cartTax, clearCartHandler);
        return (
          <>
            <div className="cart-totals">
              <div className="cart-totals-center">
                <Link to="/">
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => clearCartHandler()}
                  >
                    clear cart
                  </button>
                </Link>
              </div>
            </div>
          </>
        );
      }}
    </ProductConsumer>
  );
};

export default CartTotals;
