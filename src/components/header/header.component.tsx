import { Fragment } from "react";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { shop_name } from "../../asset/asset";
import { header_about } from "../../asset/asset";
import { header_category_1 } from "../../asset/asset";
import { header_category_2 } from "../../asset/asset";
import { header_category_3 } from "../../asset/asset";

import { CustomLink } from "../../utilities/components.styles";
import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <CustomLink to={"/"}>
            <Navbar.Brand href="/">
              <span className="custom-navbar-main-title">{shop_name}</span>
            </Navbar.Brand>
          </CustomLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#about">{header_about}</Nav.Link>
              <NavDropdown title="boutique" id="basic-nav-dropdown">
                <CustomLink to={"/"} state={{ previewtype: "sac" }}>
                  <NavDropdown.Item href="#action/3.1">
                    {header_category_1}
                  </NavDropdown.Item>
                </CustomLink>
                <CustomLink to={"/"} state={{ previewtype: "panier" }}>
                  <NavDropdown.Item href="#action/3.2">
                    {header_category_2}
                  </NavDropdown.Item>
                </CustomLink>
                <CustomLink to={"/"} state={{ previewtype: "autre" }}>
                  <NavDropdown.Item href="#action/3.3">
                    {header_category_3}
                  </NavDropdown.Item>
                </CustomLink>
                <NavDropdown.Divider />
                <CustomLink to={"/contact"}>
                  <NavDropdown.Item href="#action/3.4">
                    Contact
                  </NavDropdown.Item>
                </CustomLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </Fragment>
  );
};

export default Header;
