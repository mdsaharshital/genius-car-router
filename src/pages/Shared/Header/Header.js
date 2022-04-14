import React from "react";
import "./Header.css";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";
import auth from "./../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        bg="dark"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={logo} height="35" alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#experts">Experts</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/action/3.1">
                  Action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <span className="text-white">{user?.displayName}</span>
              {user?.uid ? (
                <Nav.Link onClick={logOut} eventKey={2} as={Link} to="/">
                  Log Out
                </Nav.Link>
              ) : (
                <Nav.Link eventKey={2} as={Link} to="/login">
                  Log in
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
