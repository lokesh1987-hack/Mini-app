import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavigatorBar() {
  const style = {
    marginLeft: "50px",
    textDecoration: "none",
  };
  return (
    <div>
      <Navbar className="p-2" bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <h3>Shoes</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link style={style} to="/">
                Home
              </Link>
              <Link style={style} to="/tables">
                Tables
              </Link>
              <Link style={style} to="/graphs">
                Graphs
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavigatorBar;
