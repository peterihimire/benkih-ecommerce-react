import React, { Component } from "react";
import items from "./data";

//Create context
const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    offset: 0,
    products: [],
    perPage: 6,
    currentPage: 0,
    slice: [],
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
    // console.log(this.props.match);
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
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.slug === slug);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count + 1;
    console.log(product.price, product.count, product.total);
    // product.total = product.price;
    product.total = product.count * product.price;
    console.log(product.price, product.count, product.total);
    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrementHandler = slug => {
    let tempCart = [...this.state.cart];
    const selectedProduct = tempCart.find(item => item.slug === slug);
    const index = tempCart.indexOf(selectedProduct);
    const product = tempCart[index];

    product.count = product.count - 1;
    product.total = product.total - product.price;
    if (product.count === 0) {
      this.removeProductHandler(slug);
    } else {
      product.total = product.count * product.price;
      this.setState(
        () => {
          return {
            cart: [...tempCart]
          };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  removeProductHandler = slug => {
    let tempProducts = [...this.state.products];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.slug !== slug);

    const index = tempProducts.indexOf(this.getProduct(slug));
    let removedProduct = tempProducts[index];
    removedProduct.inCart = false;
    removedProduct.count = 0;
    removedProduct.total = 0;

    this.setState(
      () => {
        return { cart: [...tempCart], products: [...tempProducts] };
      },
      () => {
        this.addTotals();
      }
    );
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
    const total = parseFloat((subTotal + tax).toFixed(2));
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
