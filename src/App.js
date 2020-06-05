import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import MobileNav from "./components/MobileNav";
import Home from "./pages/Home";
import Products from "./pages/Products";
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route component={NotFound} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
