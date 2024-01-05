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
            <NavDropdown title="Countries" id="navbarDropdown">
              <Link href="/greece">
                <NavDropdown.Item as="span">Greece</NavDropdown.Item>
              </Link>
              <Link href="/india">
                <NavDropdown.Item as="span">India</NavDropdown.Item>
              </Link>
              <Link href="/ireland">
                <NavDropdown.Item as="span">Ireland</NavDropdown.Item>
              </Link>
              <Link href="/japan">
                <NavDropdown.Item as="span">Japan</NavDropdown.Item>
              </Link>
              <Link href="/poland">
                <NavDropdown.Item as="span">Poland</NavDropdown.Item>
              </Link>
              <Link href="/spain">
                <NavDropdown.Item as="span">Spain</NavDropdown.Item>
              </Link>
            </NavDropdown>
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
