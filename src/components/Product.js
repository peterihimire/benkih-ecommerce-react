import React from "react";
import { Link } from "react-router-dom";
import { FaCartPlus, FaInfo } from "react-icons/fa";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

function Product(props) {
  const { id, name, price, image, inCart, slug, company } = props.product;
  console.log(id, name, price, slug, company);
  return (
    <article className="product">
      <ProductConsumer>
        {(value) => {
          console.log(value);
          return (
            <div
              className="img-container"
              onClick={() => value.detailHandler(slug)}
            >
              <div>
                <img src={image} alt="product" />
              </div>
              <Link to={`/details/${slug}`} className="cart-btn-details">
                <FaInfo />
              </Link>
              <button
                className="cart-btn"
                disabled={inCart ? true : false}
                onClick={() => {
                  value.addToCart(slug);
                  value.openModalHandler(slug);
                }}
              >
                {inCart ? <p disabled>in cart</p> : <FaCartPlus />}
              </button>
            </div>
          );
        }}
      </ProductConsumer>

      <div className="product-footer">
        <p>{name}</p>
        <h3>
          <span>$ </span>
          {price}
        </h3>
      </div>
    </article>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string,
    images: PropTypes.array,
    name: PropTypes.string,
    inCart: PropTypes.bool,
  }).isRequired,
};

export default Product;
