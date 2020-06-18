import React from "react";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import { FaBars, FaCartPlus, FaUser } from "react-icons/fa";

const Navbar = props => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="first-nav">
            <div className="navbar-header">
              <Link to="/" className="logo">
                <strong>
                  ben<span>kih</span>{" "}
                </strong>
              </Link>
            </div>
            <ul className="navbar-links">
              <li className="navbar-item">
                <Link to="/">home</Link>
              </li>
              <li className="navbar-item">
                <Link to="/products">products</Link>
              </li>
              <li className="navbar-item">
                <Link to="/about">about</Link>
              </li>
              <li className="navbar-item">
                <Link to="/contact">contact</Link>
              </li>
            </ul>

            <ul className="navbar-icons">
              <li className="navbar-items items-btn">
                <button
                  className="navbar-btn"
                  type="button"
                  onClick={props.clicked}
                >
                  <FaBars className="navbar-btn-icon" />
                </button>
              </li>
              {/* <li className="navbar-items">
                <Link to="">
                  <span>
                    <FaSearch className="navbar-items-icon" />
                  </span>
                </Link>
              </li> */}
              <li className="navbar-items">
                <Link to="">
                  <span>
                    <FaUser className="navbar-items-icon" />
                  </span>
                </Link>
              </li>
              <li className="navbar-items">
                <Link to="/cart">
                  <span>
                    <FaCartPlus className="navbar-items-icon" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* <Category /> */}
      </nav>
      <Category />
    </React.Fragment>
  );
};

export default Navbar;
