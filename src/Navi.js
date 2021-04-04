import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CardSummary from './CartSummary'
import {Link} from 'react-router-dom'

export default class Navi extends Component {
  
  render() {
    
    return (
      <div>
        <Navbar color="light" light expand="sm">
          <NavbarBrand href="/">Northwind React</NavbarBrand>
          <NavbarToggler />
     
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to='/form1'>Demo Form-1</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to='/form2'>Demo Form-2</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <CardSummary removeFromCart={this.props.removeFromCart} cart={this.props.cart}/>
             
            </Nav>
            <NavbarText>Simple Text</NavbarText>

        </Navbar>
      </div>
    );
  }
}
