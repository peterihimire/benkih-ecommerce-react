import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";

const Category = () => {
  return (
    <div className="category">
      <div className="category-center">
        <div className="category-div">
          <p>categories</p>
          <span>
            {" "}
            <FaBars />
          </span>
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
