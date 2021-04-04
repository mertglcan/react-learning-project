import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Navi from "./Navi";
import CategoryList from "./CategoryList";
import ProductList from "./ProductList";
import alertify from "alertifyjs";
import { Switch } from "react-router";
import { Route } from "react-router-dom";
import CartList from "./CartList";
import NotFound from "./NotFound";
import DemoForm1 from "./DemoForm1";
import DemoForm2 from "./DemoForm2";
export default class App extends Component {
  state = {
    selectedCategory: "",
    products: [],
    cart: [],
  };
  componentDidMount() {
    this.getProducts();
  }
  removeFromCart = (product) => {
    let newCart = this.state.cart;
    this.setState({ cart: newCart.filter((x) => x.item.id !== product.id) });
    alertify.error(product.productName + " removed from cart!");
  };
  addToCart = (product) => {
    let newCart = this.state.cart;
    let newItem = newCart.find((x) => x.item.id === product.id);
    if (newItem) {
      newItem.quantity += 1;
    } else {
      newCart.push({
        item: product,
        quantity: 1,
      });
    }
    alertify.success(product.productName + " added to cart.", 2);
    this.setState({ cart: newCart });
  };
  changeCategory = (category) => {
    this.setState({ selectedCategory: category });
    this.getProducts(category.id);
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products";
    if (categoryId) url += "?categoryId=" + categoryId;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  render() {
    return (
      <Container>
        <Navi cart={this.state.cart} removeFromCart={this.removeFromCart} />
        <Row>
          <Col xs="3">
            <CategoryList
              title="Categories"
              changeCategory={this.changeCategory}
              selectedCategory={this.state.selectedCategory}
            />
          </Col>
          <Col xs="9">
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <ProductList
                    {...props}
                    title="Products"
                    addToCart={this.addToCart}
                    products={this.state.products}
                    selectedCategory={this.state.selectedCategory}
                  />
                )}
              />
              <Route
                exact
                path="/cart"
                render={(props) => (
                  <CartList
                    {...props}
                    removeFromCart={this.removeFromCart}
                    cart={this.state.cart}
                  />
                )}
              />
              <Route
              exact
              path="/form1"
              component={DemoForm1}
              />
              <Route
              exact
              path="/form2"
              component={DemoForm2}
              />
              <Route exact component={NotFound} />
            </Switch>
          </Col>
        </Row>
      </Container>
    );
  }
}
