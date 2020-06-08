import React from "react";
import { ProductConsumer } from "../context";
// import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <ProductConsumer>
      {value => {
        const {
          id,
          slug,
          name,
          price,
          description,
          company,
          inCart,
          image
        } = value.detailProduct;
        console.log(value.detailProduct);
        console.log(image);
        return (
          <section className="details">
            <div className="details-center">
              <div className="details-title">
                <h2>{name}</h2>
              </div>
              <div className="details-container">
                <div className="details-img">
                  <img
                    src={image}
                    alt="product"
                    // height="700px"
                    width="100%"
                  />
                </div>
                <div className="details-info">
                  <h3>Model: {name}</h3>
                  <h5>
                    made by : <span>{company}</span>
                  </h5>
                  <h5>
                    <strong>
                      price : <span>$</span>
                      {price}
                    </strong>
                  </h5>
                  <p>
                    <strong>some info about product :</strong>
                  </p>
                  <p>{description}</p>
                  <div className="details-btn-container">
                    <Link to="/products">
                      <button className="btn back-product-btn">
                        {" "}
                        back to products
                      </button>
                    </Link>

                    <button
                      disabled={inCart ? true : false}
                      className="btn add-incart-btn"
                      onClick={() => {
                        value.addToCart(slug);
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
