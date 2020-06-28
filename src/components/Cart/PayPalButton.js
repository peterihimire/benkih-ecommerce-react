import React, { Component } from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { ProductConsumer } from "../../context";

export class PayPalButton extends Component {
  render() {
    console.log(this.props);
    return (
      <ProductConsumer>
        {value => {
          console.log(value);

          const onSuccess = payment => {
            console.log("The payment was succeeded!", payment);
            this.props.emptyCart();
            this.props.history.historyProp.push("/products");
          };
          const onCancel = data => {
            console.log("The payment was cancelled!", data);
          };
          const onError = err => {
            console.log("Error!", err);
          };
          let env = "sandbox";
          let currency = "USD";
          // let total = 1;

          const client = {
            sandbox:
              "Afa08Z5v4g392b5bfbHhGosKJY9AkVlqi1PXnvnB9dEJGYykoLa849APH3aMgZMY820_-T7uplbFzPhQ",
            production: "your-production-api-id"
          };
          return (
            <PaypalExpressBtn
              env={env}
              client={client}
              currency={currency}
              total={this.props.total}
              onError={onError}
              onSuccess={onSuccess}
              onCancel={onCancel}
            />
          );
        }}
      </ProductConsumer>
    );
  }
}

export default PayPalButton;
