import React, { Component } from "react";
import Product from "./Product";
import { ProductConsumer } from "../context";
import ReactPaginate from "react-paginate";
import Loading from "../components/Loading";

class ProductList extends Component {
  render() {
    return (
      <>
        <ProductConsumer>
          {value => {
            console.log(value);
            const {
              slice,
              products,
              pageCount,
              handlePageClick,
              loading
            } = value;
            console.log(slice, products, pageCount, handlePageClick, loading);
            return (
              <section className="product-list">
                {loading ? (
                  <Loading />
                ) : (
                  <>
                    <div className="product-list-center">
                      {slice.map(item => {
                        return <Product key={item.id} product={item} />;
                      })}
                    </div>
                    <ReactPaginate
                      previousLabel={"prev"}
                      nextLabel={"next"}
                      breakLabel={"..."}
                      breakClassName={"break-me"}
                      pageCount={pageCount}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={5}
                      onPageChange={handlePageClick}
                      containerClassName={"pagination"}
                      subContainerClassName={"pages pagination"}
                      activeClassName={"active"}
                    />
                  </>
                )}
              </section>
            );
          }}
        </ProductConsumer>
      </>
    );
  }
}

export default ProductList;

// {return slice.map(product => {
//                   return <Product key={product.id} product={product} />;
//                 })
