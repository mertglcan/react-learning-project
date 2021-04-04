import React, { Component } from "react";
import { Table ,Button} from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>
          {this.props.title} of {this.props.selectedCategory.categoryName??"All"}
        </h3>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {
            this.props.products.map((x) => (
              <tr key={x.id}>
                <th scope="row">
                  {x.id}
                </th>
                <td>{x.productName}</td>
                <td>{x.quantityPerUnit}</td>
                <td>{x.unitPrice}</td>
                <td>{x.unitsInStock}</td>
                <td><Button size="sm" outline color="primary" onClick={()=>this.props.addToCart(x)}>+ Add</Button></td>
              </tr>
            ))
          }
          </tbody>
        </Table>
      </div>
    );
  }
}
