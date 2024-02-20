import { Fragment } from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
  shop_name,
  shop_logo_url,
  header_about,
  header_category_1,
  header_category_2,
  header_category_3,
} from "../../asset/asset";

import { CustomLink } from "../../utilities/components.styles";
import { CustomHeaderMenuLink } from "./header.styles";
import "./header.styles.scss";

const Header = () => {
  return (
    <Fragment>
      <Navbar expand="lg" className="custom-navbar">
        <Container>
          <div className="shoptitle-contaier">
            <div>
              <img
                src={shop_logo_url}
                style={{ height: "40px" }}
                alt="shop-logo"
              />
            </div>
            <CustomLink to={"/"}>
              <span className="custom-navbar-main-title">{shop_name}</span>
            </CustomLink>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <CustomHeaderMenuLink
                to={"/about"}
                className="custom-header-menu-link-about"
              >
                {header_about}
              </CustomHeaderMenuLink>
              <NavDropdown title="boutique" id="basic-nav-dropdown">
                <CustomHeaderMenuLink to={"/"} state={{ previewtype: "sacs" }}>
                  {header_category_1}
                </CustomHeaderMenuLink>
                <CustomHeaderMenuLink
                  to={"/"}
                  state={{ previewtype: "vannerie" }}
                >
                  {header_category_2}
                </CustomHeaderMenuLink>
                <CustomHeaderMenuLink to={"/"} state={{ previewtype: "autre" }}>
                  {header_category_3}
                </CustomHeaderMenuLink>
                <NavDropdown.Divider />
                <CustomHeaderMenuLink to={"/contact"}>
                  Contact
                </CustomHeaderMenuLink>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>{" "}
    </Fragment>
  );
};

export default Header;
