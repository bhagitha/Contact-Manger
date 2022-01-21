import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./AppContact.css";

class NewContact extends Component {
  // const [contacts, setContacts] = useState({
  //   name:"" , email:""
  // })

  state = {
    name: "",
    email: "",
  };

  fcnAdd = () => {
     console.log("name: " + this.state.name + " email : " + this.state.email);
    this.props.getData(this.state);
  };

  render() {
    return (
      <>
        <Form className="container" onSubmit={this.fcnAdd}>
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={this.state.name}
              onChange={(e) =>this.setState({ name: e.target.value })}
              className="border-info"
            />
          </Form.Group>

          <Form.Group className="mb-3 w-75" controlId="formBasicPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
              className="border-info"
            />
          </Form.Group>

          <Button variant="info" className="text-light" type="submit">
            Add Contact
          </Button>
        </Form>
      </>
    );
  }
}
export default NewContact;
