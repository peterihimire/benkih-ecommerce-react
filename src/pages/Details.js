import React from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

class Details extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.match.params.slug);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  render() {
    return (
      <ProductConsumer>
        {value => {
          console.log(value);
          const { getProduct, addToCart, openModalHandler } = value;
          console.log(getProduct);
          const product = getProduct(this.state.slug);
          console.log(product);
          if (!product) {
            return (
              <div className="error">
                <div className="error-center">
                  <h3>No such product could be found...</h3>
                  <Link
                    to="/products"
                    className="btn dark product-not-found-btn"
                  >
                    back to products
                  </Link>
                </div>
              </div>
            );
          }
          // const {
          //   slug,
          //   name,
          //   price,
          //   description,
          //   company,
          //   inCart,
          //   image
          // } = value.detailProduct;
          // console.log(value.detailProduct);
          // console.log(image);
          return (
            <section className="details">
              <div className="details-center">
                <div className="details-title">
                  <h2>{product.name}</h2>
                </div>
                <div className="details-container">
                  <div className="details-img">
                    <div className="details-img-center">
                      <img src={product.image} alt="product" />
                    </div>
                  </div>
                  <div className="details-info">
                    <h3 className="details-model">
                      name : <span>{product.name}</span>
                    </h3>
                    <h5 className="details-made">
                      designer : <span>{product.company}</span>
                    </h5>
                    <h5 className="details-price">
                      <strong>
                        price : <span> $ {product.price}</span>
                      </strong>
                    </h5>
                    <h4>some info about product :</h4>
                    <p>{product.description}</p>
                    <div className="details-btn-container">
                      <Link to="/products">
                        <button className="btn back-product-btn">
                          back to products
                        </button>
                      </Link>
                      <button
                        disabled={product.inCart ? true : false}
                        className="btn add-incart-btn"
                        onClick={() => {
                          addToCart(product.slug);
                          openModalHandler(product.slug);
                        }}
                      >
                        {product.inCart ? "in cart" : "add to cart"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        }}
      </ProductConsumer>
    );
  }
}

// const Details = props => {
//   console.log(props);
//   return (
//     <ProductConsumer>
//       {value => {
//         console.log(value);

//         if (!value.detailProduct) {
//           return (
//             <div className="error">
//               <h3>no such product could be found...</h3>
//               <Link to="/products" className="btn">
//                 back to products
//               </Link>
//             </div>
//           );
//         }
//         const {
//           slug,
//           name,
//           price,
//           description,
//           company,
//           inCart,
//           image
//         } = value.detailProduct;
//         console.log(value.detailProduct);
//         // console.log(image);
//         return (
//           <section className="details">
//             <div className="details-center">
//               <div className="details-title">
//                 <h2>{name}</h2>
//               </div>
//               <div className="details-container">
//                 <div className="details-img">
//                   <img src={image} alt="product" width="100%" />
//                 </div>
//                 <div className="details-info">
//                   <h3 className="details-model">
//                     model : <span>{name}</span>
//                   </h3>
//                   <h5 className="details-made">
//                     made by : <span>{company}</span>
//                   </h5>
//                   <h5 className="details-price">
//                     <strong>
//                       price : <span>$</span>
//                       {price}
//                     </strong>
//                   </h5>
//                   <h4>some info about product :</h4>
//                   <p>{description}</p>
//                   <div className="details-btn-container">
//                     <Link to="/products">
//                       <button className="btn back-product-btn">
//                         back to products
//                       </button>
//                     </Link>
//                     <button
//                       disabled={inCart ? true : false}
//                       className="btn add-incart-btn"
//                       onClick={() => {
//                         value.addToCart(slug);
//                         value.openModalHandler(slug);
//                       }}
//                     >
//                       {inCart ? "in cart" : "add to cart"}
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         );
//       }}
//     </ProductConsumer>
//   );
// };

export default Details;
