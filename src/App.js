import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    isOpen: false
  };
  toggleHandler = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar clicked={this.toggleHandler} />
        <MobileNav showNav={this.state.isOpen} />
        <Modal />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/details" component={Details} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
