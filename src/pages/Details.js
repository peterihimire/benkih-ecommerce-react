import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        if (!value.detailProduct) {
          return (
            <div className="error">
              <h3>no such product could be found...</h3>
              <Link to="/products" className="btn">
                back to products
              </Link>
            </div>
          );
        }
        const {
          slug,
          name,
          price,
          description,
          company,
          inCart,
          image
        } = value.detailProduct;
        console.log(value.detailProduct);
        // console.log(image);
        return (
          <section className="details">
            <div className="details-center">
              <div className="details-title">
                <h2>{name}</h2>
              </div>
              <div className="details-container">
                <div className="details-img">
                  <img src={image} alt="product" width="100%" />
                </div>
                <div className="details-info">
                  <h3 className="details-model">
                    model : <span>{name}</span>
                  </h3>
                  <h5 className="details-made">
                    made by : <span>{company}</span>
                  </h5>
                  <h5 className="details-price">
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <h4>some info about product :</h4>
                  <p>{description}</p>
                  <div className="details-btn-container">
                    <Link to="/products">
                      <button className="btn back-product-btn">
                        back to products
                      </button>
                    </Link>
                    <button
                      disabled={inCart ? true : false}
                      className="btn add-incart-btn"
                      onClick={() => {
                        value.addToCart(slug);
                        value.openModalHandler(slug);
                      }}
                    >
                      {inCart ? "in cart" : "add to cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default Details;
