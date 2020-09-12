import React from "react";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import '../../styles/Navigation.css';

const Navigation = () => {
  return (
    <div className="sticky-top">
      <Navbar bg="light" expand="lg">
        <Nav.Link href="/" className="offset-xl-2 logo">
          <Image src={Logo}/>
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse expand="xl" id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">HOME</Nav.Link>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown">
              <NavDropdown.Item href="about_us">About us</NavDropdown.Item>
              <NavDropdown.Item href="contact_us">Contact us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="clinics">GOLF CLINICS</Nav.Link>
            <NavDropdown title="INJURY PREVENTION" id="basic-nav-dropdown">
              <NavDropdown.Item href="stretching">Stretching</NavDropdown.Item>
              <NavDropdown.Item href="strengthening">Strengthening Exercises</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="OUR TEAM" id="basic-nav-dropdown">
              <NavDropdown.Item href="coach">Coaching Team</NavDropdown.Item>
              <NavDropdown.Item href="advisor">Advisors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="message">FOUNDER'S MESSAGE</Nav.Link>
            <Nav.Link href="partners">PARTNER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
