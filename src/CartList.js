import React, { Component } from "react";
import { Table, Button } from "reactstrap";
export default class CartList extends Component {
  render() {
    return (
      <div>
        <h4>Your Cart is here..</h4>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Quantity</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {this.props.cart.map((x) => (
              <tr key={x.item.id}>
                <td>{x.item.id}</td>
                <td>{x.item.productName}</td>
                <td>{x.item.unityPrice}</td>
                <td>{x.item.unitsInStock}</td>
                <td>{x.quantity}</td>
                <td>
                  <Button
                    size="sm"
                    color="danger"
                    onClick={()=>this.props.removeFromCart(x.item)}
                  >
                    x
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
