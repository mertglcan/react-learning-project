import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: [
      { id: 1, categoryName: "Beveranges" },
      { id: 2, categoryName: "Condiments" }
    ]
  };
  componentDidMount(){
    this.getCategories();
  }

  getCategories=()=>{
    fetch("http://localhost:3000/categories")
    .then(response=>response.json())
    .then(data=>this.setState({categories:data}))
  };
  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <ListGroup>
          {this.state.categories.map((x) => ( 
            <ListGroupItem key={x.id} onClick={()=>this.props.changeCategory(x)} active={x.id===this.props.selectedCategory.id?true:false}>{x.categoryName}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
