import React, { Component } from "react";
import items from "./data";

//Create context
const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {}
  };
  componentDidMount() {
    let products = this.formatData(items);
    this.setState({
      products
    });
    console.log(products);
  }
  formatData = items => {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let image = item.fields.image.fields.file.url;

      let product = { ...item.fields, id, image };
      return product;
    });
    return tempItems;
  };
  getProduct = slug => {
    // let tempProducts = [this.state.products];
    const product = this.state.products.find(item => item.slug === slug);
    console.log(product);
    return product;
  };
  detailHandler = slug => {
    // console.log("Hello from detailHandler");
    const product = this.getProduct(slug);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = slug => {
    console.log(`Hello from add to cart ${slug}`);
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          detailHandler: this.detailHandler,
          addToCart: this.addToCart
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
