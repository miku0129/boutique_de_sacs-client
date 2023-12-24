import { Fragment } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home">
            <span className="custom-navbar-main-title">Chez Aziliz</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">About</Nav.Link>
              <NavDropdown title="Shop" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Sac</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Panier
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Réparation des chaises
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Contact
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </Fragment>
  );
};

export default Header;
