import React, { Component } from "react";
import alertify from "alertifyjs";
export default class DemoForm1 extends Component {
  state = {
    username: "",
    city: "",
  };
  onChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    this.setState({ [name]: value });
  };
  onSubmitHandler = (event) => {
    event.preventDefault();
    alertify.success(this.state.username + " is saved to db.");
    alertify.success(this.state.city + " is saved to db.");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmitHandler}>
          <h4>UserName</h4>
          <input
            name="username"
            type="text"
            onChange={this.onChangeHandler}
          ></input>
          <small>Username is {this.state.username}</small>
          <hr></hr>
          <h4>City</h4>
          <input
            name="city"
            type="text"
            onChange={this.onChangeHandler}
          ></input>
          <small>City is {this.state.city}</small>
          <br></br>
          <button type="submit" class="btn btn-sm btn-success">
            Save
          </button>
        </form>
      </div>
    );
  }
}
