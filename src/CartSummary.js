import React, { Component } from "react";
import {
  NavItem,
  NavLink,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import {Link} from 'react-router-dom'

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
          Your Cart - {this.props.cart.length}
        </DropdownToggle>
        <DropdownMenu right>
          {this.props.cart.map((x) => (
            <DropdownItem key={x.item.id}><Badge color="danger" onClick={()=>this.props.removeFromCart(x.item)} >x</Badge> {x.item.productName} <Badge color="primary">{x.quantity}</Badge></DropdownItem>
          ))}
          <DropdownItem divider />
          <DropdownItem>
            <Link to="/cart"> Go to Cart </Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    );
  }
  renderEmptyCart(){
      return(
          <NavItem>
              <NavLink>Empty Cart</NavLink>
          </NavItem>
      );
  }
  render() {
    return <div>{this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}</div>;
  }
}
