import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import LogoImg from "../assets/chibigirl.png";

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          sticky="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand><img src={LogoImg} width="50" height="50" alt=""/>Chibi Kingdoms</Navbar.Brand>
            </LinkContainer>

            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <LinkContainer to="/vision">
                  <Nav.Link>Vision</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/gallery">
                  <Nav.Link>Gallery</Nav.Link>
                </LinkContainer>
              </Nav>
              <Nav>
                <LinkContainer to="/Faq">
                  <Nav.Link>FAQ</Nav.Link>
                </LinkContainer>

                <Nav.Link eventKey={2} target="_blank" href="https://magiceden.io">
                  MagicEden
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
