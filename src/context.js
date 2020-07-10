import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";
import { FaPlane, FaMoneyBillWaveAlt, FaUsers } from "react-icons/fa";

// Client.getEntries({
//   content_type: "benkihStore"
// }).then(response => console.log(response.items));

//Create context
const ProductContext = React.createContext();

//Provider
class ProductProvider extends Component {
  state = {
    features: [
      {
        title: "fast delivery",
        icon: <FaPlane />,
        detail:
          "Our delivery process can take place from minutes to few hours depending on your location."
      },
      {
        title: "affordable price",
        icon: <FaMoneyBillWaveAlt />,
        detail:
          "Our delivery process can take place from minutes to few hours depending on your location."
      },
      {
        title: "customer first",
        icon: <FaUsers />,
        detail:
          "Our delivery process can take place from minutes to few hours depending on your location."
      }
    ],
    offset: 0,
    products: [],
    perPage: 5,
    currentPage: 0,
    slice: [],
    detailProduct: {},
    cart: [],
    modalOpen: false,
    modalProduct: {},
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
    loading: true,
    featured: [],
    dealOfDay: [],
    newArrival: [],
    category: "categories",
    sortedProducts: []
  };
  // getData = async () => {
  //   try {
  //     let response = await Client.getEntries({
  //       content_type: "benkihStore",
  //       order: "sys.createdAt"
  //     });
  //     let products = this.formatData(response.items);
  //     const slice = products.slice(
  //       this.state.offset,
  //       this.state.offset + this.state.perPage
  //     );
  //     console.log(slice);
  //     this.setState({
  //       products,
  //       loading: false,
  //       slice,
  //       pageCount: Math.ceil(products.length / this.state.perPage)
  //     });
  //     console.log(products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  getData = () =>
    fetch(
      Client.getEntries({
        content_type: "benkihStore",
        order: "sys.createdAt"
      })
        .then(response => response.items)
        .then(products => this.formatData(products))

        // .then(products => {
        //   this.setState(() => {
        //     return { products, loading: false };
        //   });
        // })

        .then(products => {
          const slice = products.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
          );
          let newArrival = products.filter(
            product => product.newArrival === true
          );
          let featured = products.filter(product => product.featured === true);
          let dealOfDay = products.filter(
            product => product.dealOfDay === true
          );
          // let category = products.filter(product =>
          //   console.log(product.category)
          // );

          console.log(newArrival, featured, dealOfDay);
          this.setState(() => {
            return {
              products,
              loading: false,
              slice,
              featured,
              dealOfDay,
              newArrival,
              pageCount: Math.ceil(products.length / this.state.perPage)
            };
          });
        })

        .catch(error => console.log(error))
    );

  componentDidMount() {
    this.getData();
    // this.setProduct();
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

  // setProduct = () => {
  //   let goods = this.state.products;
  //   console.log(goods);
  //   let tempProducts = [];
  //   console.log(tempProducts);
  //   goods.forEach(item => {
  //     // console.log(item);
  //     const singleItem = { ...item };
  //     tempProducts = [...tempProducts, singleItem];
  //     console.log(tempProducts, singleItem);
  //   });
  //   // this.setState(() => {
  //   //   return {
  //   //     products: tempProducts
  //   //   };
  //   // });
  //   this.setState({
  //     products: tempProducts
  //   })
  // };

  getProduct = slug => {
    // let tempProducts = [...this.state.products];
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
        this.getData();
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
  handlePageClick = e => {
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;

    this.setState(
      {
        currentPage: selectedPage,
        offset: offset
      },
      () => {
        this.getData();
      }
    );
  };

  changeHandler = e => {
    const target = e.target;
    console.log(target);

    const value = target.value;
    console.log(value);
    const type = e.target.name;
    console.log(type);

    console.log(type, value);

    this.setState({ [type]: value }, this.filterProductsHandler);
  };

  filterProductsHandler = () => {
    let { products, category, slice } = this.state;
    let tempProducts = [...products];
    if (category !== "all") {
      tempProducts = tempProducts.filter(
        product => product.category === category
      );
    }
    this.setState(() => {
      return { sortedProducts: tempProducts };
    });
    console.log(category, tempProducts);
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
          clearCartHandler: this.clearCartHandler,
          handlePageClick: this.handlePageClick,
          filterProductsHandler: this.filterProductsHandler,
          changeHandler: this.changeHandler
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

//Consumer
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer, ProductContext };
