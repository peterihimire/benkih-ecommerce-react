import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { FaCartPlus, FaInfo } from "react-icons/fa";
import Title from "../components/Title";
import Loading from "../components/Loading";

const NewArrival = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        const { newArrival, loading } = value;
        console.log(newArrival);
        return (
          <section className="featured">
            <div className="featured-center">
              <Title title="new arrivals" />
              <div className="featured-container">
                {loading ? (
                  <Loading />
                ) : (
                  newArrival.map(newArr => {
                    return (
                      <article className="product new-arr-product">
                        <div
                          className="img-container img-container-newarr"
                          onClick={() => value.detailHandler(newArr.slug)}
                        >
                          <img src={newArr.image} alt="product" />

                          <Link
                            to={`/details/${newArr.slug}`}
                            className="cart-btn-details"
                          >
                            <FaInfo />
                          </Link>
                          <button
                            className="cart-btn"
                            disabled={newArr.inCart ? true : false}
                            onClick={() => {
                              value.addToCart(newArr.slug);
                              value.openModalHandler(newArr.slug);
                            }}
                          >
                            {newArr.inCart ? (
                              <p disabled>in cart</p>
                            ) : (
                              <FaCartPlus />
                            )}
                          </button>
                        </div>

                        <div className="new-arr-footer">
                          {/* <p>{newArr.name}</p> */}
                          <h3>
                            <span>$ {newArr.price}</span>
                          </h3>
                        </div>
                      </article>
                    );
                  })
                )}
              </div>
            </div>
          </section>
        );
      }}
    </ProductConsumer>
  );
};

export default NewArrival;
