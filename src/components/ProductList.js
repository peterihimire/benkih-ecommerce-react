import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";

class ProductList extends Component {
  render() {
    return (
      <div>
        <h1>This is a ProductList</h1>
        <ProductConsumer>
          {value => {
            return value.products.map(product => {
              return <Product key={product.id} product={product} />;
              // console.log(product);
            });
          }}
        </ProductConsumer>
      </div>
    );
  }
}

export default ProductList;
