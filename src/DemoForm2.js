import React, { Component } from 'react'
import alertify from 'alertifyjs'
import {Form, FormGroup,Label,Input,Select,Button} from 'reactstrap'
export default class DemoForm2 extends Component {
    state = {
        email: "",
        password: "",
        description:"",
        city:""
      };
      onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
      };
      onSubmitHandler = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + " is saved to db.");
        alertify.success(this.state.password + " is saved to db.");
        alertify.success(this.state.description + " is saved to db.");
        alertify.success(this.state.city + " is saved to db.");
      };
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for="email">Email :</Label>
                        <Input type="text" name="email" onChange={this.onChangeHandler}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password :</Label>
                        <Input type="password" name="password" onChange={this.onChangeHandler}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description :</Label>
                        <Input type="textarea" name="description" onChange={this.onChangeHandler}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City :</Label>
                        <Input type="select" name="city" onChange={this.onChangeHandler}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Antalya</option>
                            <option>Erzurum</option>
                        </Input>
                    </FormGroup>
                    <Button size="sm" color="success">Save</Button>
                </Form>
            </div>
        )
    }
}
