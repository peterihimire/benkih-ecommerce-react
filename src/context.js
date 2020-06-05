import React, { Component } from "react";
import items from "./data";

//Create context
const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    products: []
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
      let images = item.fields.images.map(image => image.fields.file.url);

      let product = { ...item.fields, id, images };
      return product;
    });
    return tempItems;
  };
  detailHandler = () => {
    console.log("Hello from detailHandler");
  };
  addToCart = () => {
    console.log("Hello from add to cart");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
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
