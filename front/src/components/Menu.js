import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Menu = () => {
  return (
          <div>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Row><Col lg={"6"}>
        <Navbar.Brand href="#home">
          <img
              alt=""
              src="./images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          Delicias Italianas</Navbar.Brand>
          </Col>
          <Col lg={"6"}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto d-flex justify-content-right">
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Menu</Nav.Link>
            <Nav.Link href="#features">Inicio</Nav.Link>
            <Nav.Link href="#pricing">Menu</Nav.Link>
            <Nav.Link href="#pricing">Menu</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Ventas</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
             Platos
            </Nav.Link>
            <Link to='/cart' className='d-flex ml-4'>
                    <i class='fa fa-shopping-cart fa-2x text-white' aria-hidden="false"></i>
                    <span className='ml-1' id='cart_count'>0</span>
                </Link>




          </Nav>
        </Navbar.Collapse>
        </Col>
        </Row>
      </Container>
    </Navbar>
          </div>

  )
}
