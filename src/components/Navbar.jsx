import React, { Component } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  background-color: transparent;
  
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <div>
        <StyledNavbar sticky="top" collapseOnSelect expand="lg">
          <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Chibi Kingdoms</Navbar.Brand>
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
                <LinkContainer to="/faq">
                  <Nav.Link>FAQ</Nav.Link>
                </LinkContainer>

                <Nav.Link
                  eventKey={2}
                  target="_blank"
                  href="https://magiceden.io"
                >
                  MagicEden
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </StyledNavbar>
      </div>
    );
  }
}
