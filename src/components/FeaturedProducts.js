import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { FaCartPlus, FaInfo } from "react-icons/fa";
import Title from "../components/Title";
import Loading from "../components/Loading";
const FeaturedProducts = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        const { featured, loading } = value;
        console.log(featured);
        return (
          <section className="featured">
            <div className="featured-center">
              <Title title="featured products" />
              <div className="featured-container">
                {loading ? (
                  <Loading />
                ) : (
                  featured.map(featured => {
                    return (
                      <article className="product new-arr-product">
                        <div
                          className="img-container img-container-featured"
                          onClick={() => value.detailHandler(featured.slug)}
                        >
                          <Link to={`/details/${featured.slug}`}>
                            <img src={featured.image} alt="product" />
                          </Link>
                          <Link
                            to={`/details/${featured.slug}`}
                            className="cart-btn-details"
                          >
                            <FaInfo />
                          </Link>
                          <button
                            className="cart-btn"
                            disabled={featured.inCart ? true : false}
                            onClick={() => {
                              value.addToCart(featured.slug);
                              value.openModalHandler(featured.slug);
                            }}
                          >
                            {featured.inCart ? (
                              <p disabled>in cart</p>
                            ) : (
                              <FaCartPlus />
                            )}
                          </button>
                        </div>

                        <div className="new-arr-footer">
                          {/* <p>{featured.name}</p> */}
                          <h3>
                            <span>$ {featured.price}</span>
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

export default FeaturedProducts;
