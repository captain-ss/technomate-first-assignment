import React from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const NavbarTop = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="Cart"><ShoppingCartIcon/></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />

      <br />
    </>
  );
};

export default NavbarTop;
