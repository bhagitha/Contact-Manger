import React,{useEffect} from "react";
import { Row, Form, Col, Button, Icon } from "react-bootstrap";
// import Pic from 'https://cdn1.iconfinder.com/data/icons/web-basics-color-vol-05/512/user_human_person_avatar_delete_remove-512.png'

function ContactList(props) {
  const styles = {
    width: "60px",
  };
  useEffect(() => {
  console.log("Contacts from list  : "+props.contacts)
  })

  const RenderContacts = props.contacts.map((data,i) => {
    return (
      <div>
        <Form className=" container w-100" key={i}>
          <Form.Group className="mb-3 w-75" controlId="formBasicEmail">
            <Row>
              <Col lg={2}>
                <img
                  style={styles}
                  src="https://www.pngkit.com/png/full/115-1150342_user-avatar-icon-iconos-de-mujeres-a-color.png"
                />
              </Col>
              <Col lg={8}>
                <Form.Label>{data.name}</Form.Label>
                <br />
                <Form.Label>{data.email}</Form.Label>
              </Col>
              <Col lg={2}>
                <button type="button" class="btn btn-outline-danger">
                  Delete
                </button>
              </Col>
            </Row>
          </Form.Group>
        </Form>

        <hr className="w-75" />
      </div>
    );
  });
  return <> {RenderContacts} </>;
}

export default ContactList;
