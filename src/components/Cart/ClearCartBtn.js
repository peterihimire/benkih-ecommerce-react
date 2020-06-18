import React from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../../context";
const ClearCartBtn = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        const { clearCartHandler } = value;
        console.log(clearCartHandler);
        return (
          <div className="clear-cart-btn">
            <div className="clear-cart-btn-center">
              <Link to="/products" className="clear-cart-link">
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
        );
      }}
    </ProductConsumer>
  );
};

export default ClearCartBtn;
