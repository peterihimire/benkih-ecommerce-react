import React from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

const Category = () => {
  return (
    <ProductConsumer>
      {value => {
        console.log(value);
        const { changeHandler, category, products, slice } = value;
        console.log(changeHandler, category);

        const getUnique = (items, value) => {
          return [...new Set(items.map(item => item[value]))];
        };

        let categories = getUnique(products, "category");
        categories = ["all", ...categories];

        return (
          <div className="category">
            <div className="category-center">
              {/* <div className="category-dropdown">
                <button className="category-div">
                  <p>categories</p>
                  <span>
                    <FaBars />
                  </span>
                </button>
                <div className="category-dropdown-content">
                  {
                    (categories = categories.map((item, index) => {
                      return (
                        <Link
                          id="category"
                          to="/products"
                          key={index}
                          onChange={changeHandler}
                        >
                          {item}
                        </Link>
                      );
                    }))
                  }
                </div>
              </div> */}

              <div className="category-dropdown">
                <button className="category-div">
                  <p>categories</p>
                  <span>
                    <FaBars />
                  </span>
                </button>

                <select
                  name="category"
                  id="category"
                  value={category}
                  className="form-control"
                  onChange={changeHandler}
                >
                  {
                    (categories = categories.map((item, index) => {
                      return (
                        <option
                          value={item}
                          key={index}
                          className="option-text"
                        >
                          {item}
                        </option>
                      );
                    }))
                  }
                </select>
                {/* <div className="category-dropdown-content">
                  {
                    (categories = categories.map((item, index) => {
                      return (
                        <Link
                          id="category"
                          to="/products"
                          key={index}
                          onChange={changeHandler}
                        >
                          {item}
                        </Link>
                      );
                    }))
                  }
                </div> */}
              </div>
              {/* 
              <form>
                <div className="sort-look">
                  <select
                    name="category"
                    id="category"
                    value={category}
                    className="form-control"
                    onChange={changeHandler}
                  >
                    {
                      (categories = categories.map((item, index) => {
                        return (
                          <option
                            value={item}
                            key={index}
                            className="option-text"
                          >
                            {item}
                          </option>
                        );
                      }))
                    }
                  </select>
                </div>
              </form> */}

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
      }}
    </ProductConsumer>
  );
};

export default Category;
