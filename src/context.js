import React, { Component } from "react";
import items from "./data";

//Create context
const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
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
  setProduct = () => {
    let products = this.formatData(items);
    let tempProducts = [];
    products.forEach(item => {
      console.log(item);
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
      console.log(tempProducts, singleItem);
    });
    this.setState(() => {
      return {
        products: tempProducts
      };
    });
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
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getProduct(slug));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        //this is a call back function to run immediately product is added to the cart
        this.addTotals();
      }
    );
  };

  // Modal Method Handlers
  openModalHandler = slug => {
    const product = this.getProduct(slug);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closeModalHandler = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };

  // Cart Method Handlers
  incrementHandler = slug => {
    console.log("this is the increment-handler method");
  };
  decrementHandler = slug => {
    console.log("this is the decrement-handler method");
  };
  removeProductHandler = slug => {
    console.log("this is the remove-product-handler method");
  };
  clearCartHandler = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProduct();
        this.addTotals();
      }
    );
  };
  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          getProduct: this.getProduct,
          detailHandler: this.detailHandler,
          addToCart: this.addToCart,
          openModalHandler: this.openModalHandler,
          closeModalHandler: this.closeModalHandler,
          incrementHandler: this.incrementHandler,
          decrementHandler: this.decrementHandler,
          removeProductHandler: this.removeProductHandler,
          clearCartHandler: this.clearCartHandler
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
