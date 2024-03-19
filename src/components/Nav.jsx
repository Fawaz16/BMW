import React from "react";
import { Button } from "react-bootstrap";
import { Navbar, Nav } from "react-bootstrap";

export const Navigation = () => {
  return (
    <div className="navingation">
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
          position: "fixed",
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Navbar.Brand className="mx-5" href="#">
          Mercedes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#" className="mx-5 mt-3">
              Our Models
            </Nav.Link>
            <Nav.Link href="#" className="mx-5 mt-3">
              Buy Online
            </Nav.Link>
            <Nav.Link href="#" className="mx-5 mt-3">
              Offers and Finances
            </Nav.Link>
            <Nav.Link href="#" className="mx-5 mt-3">
              Owners Area
            </Nav.Link>
            <Nav.Link href="#" className="mx-5 mt-3">
              Our Brand
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
