import React, { useContext } from "react";
import { ProductContext } from "../context";
import { Link } from "react-router-dom";
import { FaCartPlus, FaInfo } from "react-icons/fa";

const CategoryPage = () => {
  const context = useContext(ProductContext);
  console.log(context);
  const { sortedProducts } = context;
  console.log(sortedProducts);
  return (
    <section className="category-page">
      <div className="category-page-center">
        <div className="category-page-container">
          {sortedProducts.map(sorted => {
            return (
              <article className="product">
                <div
                  className="img-container"
                  onClick={() => context.detailHandler(sorted.slug)}
                >
                  <Link to={`/details/${sorted.slug}`}>
                    <img src={sorted.image} alt="product" />
                  </Link>
                  <Link
                    to={`/details/${sorted.slug}`}
                    className="cart-btn-details"
                  >
                    <FaInfo />
                  </Link>
                  <button
                    className="cart-btn"
                    disabled={sorted.inCart ? true : false}
                    onClick={() => {
                      context.addToCart(sorted.slug);
                      context.openModalHandler(sorted.slug);
                    }}
                  >
                    {sorted.inCart ? <p disabled>in cart</p> : <FaCartPlus />}
                  </button>
                </div>

                <div className="product-footer">
                  <p>{sorted.name}</p>
                  <h3>
                    <span>$ </span>
                    {sorted.price}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryPage;
