import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NavLink = styled(Nav.Link)`
  border: 3px solid transparent;
  display: block;

  &:hover {
    color: grey !important;
    border-bottom: 3px solid white;
  }
`;
const DropdownWrapper = styled('div')`
  padding-top: 4px;
`;

function NavBar() {
  return (
    <Navbar expand="lg" variant="dark">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-center">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/experience">Experience</NavLink>
          {/* <NavLink href="/projects">Projects</NavLink> */}
          <DropdownWrapper>
            <NavDropdown title="Projects" id="basic-nav-dropdown">
              <NavDropdown.Item href="/logbook">Logbook</NavDropdown.Item>
              <NavDropdown.Item href="/pokemon">Pokemon</NavDropdown.Item>
              <NavDropdown.Item href="/weather">Weather</NavDropdown.Item>
              <NavDropdown.Item href="/metronome">Metronome</NavDropdown.Item>
              <NavDropdown.Item href="/quoteapi">Quote Api</NavDropdown.Item>
              <NavDropdown.Item href="/twitch">
                My Favorite Twitch Streams
              </NavDropdown.Item>
              <NavDropdown.Item href="/numberguesser">
                Number Guesser Game
              </NavDropdown.Item>
              <NavDropdown.Item href="/chatbot">Chat Bot(WIP)</NavDropdown.Item>
            </NavDropdown>
          </DropdownWrapper>
        </Nav>
        <div className="social-part">
          <a href="https://www.linkedin.com/in/knut-axel-l-623170113/">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
