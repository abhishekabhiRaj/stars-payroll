import React, { useState } from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { data } from "../../assets/data/data";
import ModalBox from "../modal/ModalBox";

const CustomNavbar = () => {
  const [btnActive, setBtnActive] = useState(1);
  return (
    <Container className="mt-3 __fixed-navbar">
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={data[1]["image"]["logo"]} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Products" id="basic-nav-dropdown" className="__navs __roboto-font-300">
                <NavDropdown.Item href="#product/1">Product 1</NavDropdown.Item>
                <NavDropdown.Item href="#product/2">
                  Product 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#acproducttion/3">Product 3</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#pricing" className="__navs __roboto-font-300">Pricing</Nav.Link>
              <Nav.Link href="#support" className="__navs __roboto-font-300">Support</Nav.Link>
            </Nav>
            <Button
              className={btnActive === 1 ? "__btn" : "__btn __btn-active"}
              onClick={() => { setBtnActive(0) }}>
              Sign In
            </Button>
            <ModalBox
              title="Sign Up"
              className={btnActive === 0 ? "__btn" : "__btn __btn-active"}
              onClick={() => { setBtnActive(1) }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
}

export default CustomNavbar;