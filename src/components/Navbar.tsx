"use client";

import Link from "next/link";
import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-nav mt-0">
      <Container>
        <Navbar.Brand href="index.html">
          <strong>Festive</strong>Timer
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="ms-auto">
            <Link href="/">
              <Nav.Link as="span">Home</Nav.Link>
            </Link>
            <Link href="/team">
              <Nav.Link as="span">Team</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
