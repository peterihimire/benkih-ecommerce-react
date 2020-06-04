import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Category from "./components/Category";
import Home from "./pages/Home";
import Products from "./pages/Products";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Category />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route component={NotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default App;
