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
          {" "}
          <p>search...</p>
          <span>
            {" "}
            <FaSearch />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Category;
