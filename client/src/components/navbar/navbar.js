import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavbarBrand,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";
import logo from "../../assets/jmlogo.png";
import PropTypes from "prop-types";
import { logout } from "../../redux/actions/auth";
import { connect } from "react-redux";

import "../../App.css";

const TopNavBar = ({ auth: { isAuthenticated }, logout }) => {
  const guestLinks = (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <NavbarBrand as={Link} to="/">
        <img width={100} height={100} alt="style by jm logo" src={logo} />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mx-auto"
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          <Nav.Link as={Link} to="/mens" href="#mens">
            Men
          </Nav.Link>
          <Nav.Link as={Link} to="/bags" href="#womens">
            Women
          </Nav.Link>
          <Nav.Link as={Link} to="/collabs" href="#collaborations">
            Collaborations
          </Nav.Link>
          <Nav.Link as={Link} to="/accessories" href="#accesories">
            Accessories
          </Nav.Link>

          <Nav.Link as={Link} to="/byrequest" href="#byrequest">
            By Request
          </Nav.Link>
          <NavDropdown title="Heritage" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/madeinspain" href="#action/3.3">
              Made in Spain
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/designedinsa" href="#action/3.4">
              Designed in San Antonio
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/jmsjouranl" href="#jmsjouranl">
            Journal
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <FaShoppingBag />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
  const authLinks = (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
      <NavbarBrand as={Link} to="/">
        <img width={100} height={100} alt="style by jm logo" src={logo} />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          className="mx-auto"
          style={{ fontWeight: "bold", fontSize: "18px" }}
        >
          <Nav.Link as={Link} to="/mens" href="#mens">
            Men
          </Nav.Link>
          <Nav.Link as={Link} to="/bags" href="#womens">
            Women
          </Nav.Link>
          <Nav.Link as={Link} to="/collabs" href="#collaborations">
            Collaborations
          </Nav.Link>
          <Nav.Link as={Link} to="/accessories" href="#accesories">
            Accessories
          </Nav.Link>

          <Nav.Link as={Link} to="/byrequest" href="#byrequest">
            By Request
          </Nav.Link>
          <NavDropdown title="Heritage" id="collasible-nav-dropdown">
            <NavDropdown.Item as={Link} to="/madeinspain" href="#action/3.3">
              Made in Spain
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/designedinsa" href="#action/3.4">
              Designed in San Antonio
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/jmsjouranl" href="#jmsjouranl">
            Journal
          </Nav.Link>
        </Nav>
        <Nav className="ml-auto">
          <FaShoppingBag />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );

  return <Container>{isAuthenticated ? authLinks : guestLinks}</Container>;
};

TopNavBar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(TopNavBar);
