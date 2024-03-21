import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Navbars() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" id='style' >
      <Container>
        <Navbar.Brand href="#/" style={{fontSize:'larger'}}><b>LUCKY BANK</b></Navbar.Brand>  
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#/Create" ><b>CREATE USER</b> </Nav.Link>
            <Nav.Link href="#/Login" ><b>Login</b> </Nav.Link>
            <Nav.Link href="#/Deposit"><b>DEPOSIT</b></Nav.Link>
            <Nav.Link href="#/Withdraw"><b>WITHDRAW</b></Nav.Link>
            <Nav.Link href="#/Alldata"><b>ALLDATA</b></Nav.Link>
          </Nav>
          <Form className="d-flex">
           
            <Button variant="outline-success">Log out</Button>
          </Form>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

