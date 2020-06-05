import React from "react";
import { Link } from "react-router-dom";

const MobileNav = props => {
  return (
    <div className={props.showNav ? "mobile-nav show-nav" : "mobile-nav"}>
      <ul className="mobile-nav-links">
        <li className="mobile-nav-item">
          <Link to="/">home</Link>
        </li>
        <li className="mobile-nav-item">
          <Link to="/products">products</Link>
        </li>
        <li className="mobile-nav-item">
          <Link to="/about">about</Link>
        </li>
        <li className="mobile-nav-item">
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileNav;
