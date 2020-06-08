import React from "react";
import { ProductConsumer } from "../context";
import defaultImg from "../images/room-1.jpeg";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <ProductConsumer>
      {value => {
        const { products } = value;
        // console.log(products[0]);
        // const { id, name, price, descrption } = products[0];
        const copy = { ...products[0] };
        const { images, name, company, price, description, inCart } = copy;

        console.log(images);

        console.log(copy);
        return (
          <section className="details">
            <div className="details-center">
              <div className="details-title">
                <h4>{name}</h4>
              </div>
              <div className="details-container">
                <div className="details-img">
                  <img
                    src={defaultImg}
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
                  <p>some info about product :</p>
                  <p>{description}</p>
                  <div>
                    <Link to="/products">
                      <button className="btn"> back to products</button>
                    </Link>

                    <button disabled={inCart ? true : false} className="btn">
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
