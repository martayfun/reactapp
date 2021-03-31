import { Button } from "reactstrap";
import React, { Component } from "react";

export default class FormTutorial extends Component {
  state = {
    productName: "",
    unitPrice: "",
  };

  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    alert(this.state.productName + " " + this.state.unitPrice);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <div className="form-group">
            <label htmlFor="productName">Product Name</label>
            <input
              type="text"
              name="productName"
              className="form-control"
              aria-describedby="productName"
              placeholder="Product Name"
              onChange={this.onChangeHandler}
            />
            <small id="productName" className="form-text text-muted">
              Product name is {this.state.productName}
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="unitPrice">Unit Price</label>
            <input
              type="text"
              name="unitPrice"
              className="form-control"
              aria-describedby="unitPrice"
              placeholder="Unit Price"
              onChange={this.onChangeHandler}
            />
            <small id="unitPrice" className="form-text text-muted">
              Unit price is {this.state.unitPrice}
            </small>
          </div>
          <Button type="submit" color="primary">
            Save
          </Button>
        </form>
      </div>
    );
  }
}
