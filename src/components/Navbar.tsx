"use client";

import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar: React.FC = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="header-nav mt-0">
      <Navbar.Brand href="index.html">
        <strong>Festive</strong>Timer
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarSupportedContent" />
      <Navbar.Collapse id="navbarSupportedContent">
        <Nav className="ms-auto">
          <Nav.Link href="index.html">Home</Nav.Link>
          <NavDropdown title="Countries" id="navbarDropdown">
            <NavDropdown.Item href="greece.html">Greece</NavDropdown.Item>
            <NavDropdown.Item href="india.html">India</NavDropdown.Item>
            <NavDropdown.Item href="ireland.html">Ireland</NavDropdown.Item>
            <NavDropdown.Item href="japan.html">Japan</NavDropdown.Item>
            <NavDropdown.Item href="poland.html">Poland</NavDropdown.Item>
            <NavDropdown.Item href="spain.html">Spain</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="team.html">Team</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
