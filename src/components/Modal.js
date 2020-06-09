import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModalHandler } = value;
          const { image, name, price } = value.modalProduct;
          console.log(value, modalOpen, closeModalHandler);

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal">
                <div className="modal-center">
                  <div id="modal" className="modal-contents">
                    <h4>item added to cart </h4>
                    <img src={image} alt="product" />
                    <h5>{name}</h5>
                    <h5>
                      price : <span>$</span> {price}
                    </h5>
                    <Link to="/products">
                      <button
                        className="btn back-product-btn"
                        onClick={() => closeModalHandler()}
                      >
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        className="btn add-incart-btn"
                        onClick={() => closeModalHandler()}
                      >
                        go to cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          }

          // {
          //   !openModalHandler ? null : (
          //     <div className="modal">
          //       <div className="modal-center">
          //         <div>
          //           <h5>item added to cart </h5>
          //         </div>
          //       </div>
          //     </div>
          //   );
          // }
        }}
      </ProductConsumer>
    );
  }
}
