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
                  <div id="modal" className="modal-title">
                    <h5>item added to cart </h5>
                    <img
                      src={image}
                      alt="product"
                      width="200px"
                      height="200px"
                    />
                    <h5>{name}</h5>
                    <h5>price : {price}</h5>
                    <Link to="/products">
                      <button
                        className="btn"
                        onClick={() => closeModalHandler()}
                      >
                        continue shopping
                      </button>
                    </Link>
                    <Link to="/cart">
                      <button
                        className="btn"
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
