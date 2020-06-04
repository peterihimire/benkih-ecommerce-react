import React from "react";
import Category from "../components/Category";
import { Link } from "react-router-dom";
import { FaBars, FaSearch, FaCartPlus, FaUser } from "react-icons/fa";

const Navbar = props => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="navbar-center">
          <div className="first-nav">
            <div className="navbar-header">
              <Link className="logo">
                <strong>
                  ben<span>kih</span>{" "}
                </strong>
              </Link>
            </div>
            <ul className="navbar-links">
              <li className="navbar-item">
                <Link>home</Link>
              </li>
              <li className="navbar-item">
                <Link>products</Link>
              </li>
              <li className="navbar-item">
                <Link>about</Link>
              </li>
              <li className="navbar-item">
                <Link>contact</Link>
              </li>
            </ul>

            <ul className="navbar-icons">
              <li className="navbar-items items-btn">
                <button className="navbar-btn">
                  <FaBars className="navbar-btn-icon" />
                </button>
              </li>
              <li className="navbar-items">
                <Link>
                  <span>
                    <FaSearch />
                  </span>
                </Link>
              </li>
              <li className="navbar-items">
                <Link>
                  <span>
                    <FaUser />
                  </span>
                </Link>
              </li>
              <li className="navbar-items">
                <Link>
                  <span>
                    <FaCartPlus />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Category />
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
