import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import CategoryPage from "./pages/CategoryPage";
import { Route, Switch } from "react-router-dom";
import RenderTop from "./components/RenderTop";

class App extends Component {
  state = {
    isOpen: false
  };
  toggleHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  closeHandler = () => {
    this.setState({
      isOpen: false
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar clicked={this.toggleHandler} />
        <MobileNav
          showOpen={this.state.isOpen}
          removeClose={this.closeHandler}
        />
        <Modal />
        <RenderTop />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/details/:slug" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="/category" component={CategoryPage} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
