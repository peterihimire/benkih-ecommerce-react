import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <section className="product-list">
        <div className="product-list-center">
          <ProductConsumer>
            {value => {
              return value.products.map(product => {
                return <Product key={product.id} product={product} />;
                // console.log(product);
              });
            }}
          </ProductConsumer>
        </div>
      </section>
    );
  }
}

export default ProductList;
