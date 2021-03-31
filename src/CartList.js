import { Button } from "reactstrap";
import React, { Component } from "react";
import { Table } from "reactstrap";

export default class CartList extends Component {
  renderCart = () => {
    return (
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Category Id</th>
            <th>Product Name</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.cart.map((m) => (
            <tr key={m.product.id}>
              <td>{m.product.id}</td>
              <td>{m.product.categoryId}</td>
              <td>{m.product.productName}</td>
              <td>{m.product.unitPrice}</td>
              <td>{m.product.unitsInStock}</td>
              <td>{m.quantity}</td>
              <td>
                <Button
                  color="danger"
                  onClick={() => this.props.removeFromCart(m.product)}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  };
  render() {
    return <div>{this.renderCart()}</div>;
  }
}
