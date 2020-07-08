import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="category">
      <div className="category-center">
        <div className="category-dropdown">
          <button className="category-div">
            <p>categories</p>
            <span>
              <FaBars />
            </span>
          </button>
          <div className="category-dropdown-content">
            <Link to="/">men</Link>
            <Link to="/">women</Link>
            <Link to="/">unisex</Link>
          </div>
        </div>

        <div className="category-div">
          <div className="search-form">
            <input placeholder="search..." id="search" name="search" />
            <button className="search-form-btn">
              <FaSearch className="search-icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
