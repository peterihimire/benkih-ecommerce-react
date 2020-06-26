import React from "react";
import { NavLink } from "react-router-dom";

const MobileNav = props => {
  return (
    <>
      <div
        className={
          props.showOpen
            ? "mobile-nav-overlay transparent-bcg"
            : "mobile-nav-overlay"
        }
        onClick={props.removeClose}
      />
      <div className={props.showOpen ? "mobile-nav show-nav" : "mobile-nav"}>
        <ul className="mobile-nav-links">
          <li className="mobile-nav-item">
            <NavLink
              exact
              activeClassName="active"
              className="navbar-single-link"
              to="/"
            >
              home
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              activeClassName="active"
              className="navbar-single-link"
              to="/products"
            >
              products
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              activeClassName="active"
              className="navbar-single-link"
              to="/about"
            >
              about
            </NavLink>
          </li>
          <li className="mobile-nav-item">
            <NavLink
              activeClassName="active"
              className="navbar-single-link"
              to="/contact"
            >
              contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MobileNav;
