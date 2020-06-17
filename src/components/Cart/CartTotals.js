import React from "react";
import { ProductConsumer } from "../../context";
import { Link } from "react-router-dom";

const CartTotals = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        const { cartTotal, cartTax, cartSubTotal, clearCartHandler } = value;
        // console.log(cartTotal, cartSubTotal, cartTax, clearCartHandler);
        return (
          <>
            <div className="cart-totals">
              <div className="cart-totals-center">
                <div className="cart-totals-container">
                  <Link to="/products" className="cart-totals-link">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => clearCartHandler()}
                    >
                      clear cart
                    </button>
                  </Link>
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
