import React, { useState, useEffect, useRef } from "react";
import { Navbar, NavDropdown, Nav, Image } from "react-bootstrap";
import Logo from "../../assets/logo.png";
import '../../styles/Navigation.css';

const Navigation = () => {
  const [shrinkNav, setShrinkNav] = useState(false);
  const navigationRef = useRef();

  const memoScrollWrapper = () => {
    const currentHeight = navigationRef.current.getBoundingClientRect().top;
    setShrinkNav(currentHeight === 0);
  }

  useEffect(() => {
    if (window.screen.width >= 500) {
      window.addEventListener('scroll', memoScrollWrapper);
      return () => {
        window.removeEventListener('scroll', memoScrollWrapper);
      }
    }
  }, []);

  const style = {
    height: shrinkNav ? "20" : "100"
  };

  return (
    <div className="sticky-top" id="unique" style={style} ref={navigationRef}>
      <Navbar bg="light" expand="lg">
        <Nav.Link href="/" className="offset-xl-2 nav-logo">
          <Image 
            src={Logo}
            width={shrinkNav ? "40%" : "80%"}
            height={shrinkNav ? "40%" : "80%"}
          />
        </Nav.Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse expand="xl" id="basic-navbar-nav">
          <Nav className="mr-auto nav-all">
            <Nav.Link href="/" className="nav-item">HOME</Nav.Link>
            <NavDropdown title="ABOUT" id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item href="about_us" className="nav-dropitem">About us</NavDropdown.Item>
              <NavDropdown.Item href="contact_us" className="nav-dropitem">Contact us</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="message" className="nav-item">FOUNDER'S MESSAGE</Nav.Link>
            <Nav.Link href="clinics" className="nav-item">GOLF CLINICS</Nav.Link>
            <NavDropdown title="INJURY PREVENTION" id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item href="stretching" className="nav-dropitem">Stretching</NavDropdown.Item>
              <NavDropdown.Item href="strengthening" className="nav-dropitem">Strengthening Exercises</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="COACHING TEAM" id="basic-nav-dropdown" className="nav-item">
              <NavDropdown.Item href="coach" className="nav-dropitem">Coaching Team</NavDropdown.Item>
              <NavDropdown.Item href="advisor" className="nav-dropitem">Advisors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="partners" className="nav-item">PARTNERS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
