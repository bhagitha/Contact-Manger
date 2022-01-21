import React from "react";
import { Container, Row, Col, Badge, Spinner } from "react-bootstrap";

function Header() {
  return (
    <>
      <Container>

            <Badge  bg="info" size="lg">
              <Spinner animation="grow" size="sm" />{" "}
              <Spinner animation="border" />
              <Spinner animation="border" size="sm" />
              <Spinner animation="grow" />
              <Spinner animation="grow" size="sm" />
              <Spinner animation="border" />
              <Spinner animation="grow" />
              <Spinner animation="border" size="sm" />
             
          {" "}
         <hr/>
        
          <h1 className="display-2 m-3 ">
             Contact Manager</h1> 
        <hr/>
          {" "}
             
            </Badge>
        
        
            </Container>

    </>
  );
}

export default Header;
