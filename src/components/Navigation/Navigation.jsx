import React from 'react';
import { Navbar, NavDropdown, Nav, Image } from 'react-bootstrap';
import Logo from '../../assets/logo.png';

const style = {
    logo: {
      marginRight: "5%"
    }
  }

const Navigation = () =>{
    return(
        <div className="sticky-top">
            <Navbar bg="light" expand="lg" >
                <Image src={Logo} style={style.logo} className="offset-md-2"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse expand="lg" id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#clinic">Golf Clinics</Nav.Link>
                    <NavDropdown title="Injury Prevention" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#stretching">Stretching</NavDropdown.Item>
                        <NavDropdown.Item href="#strengthening">Strengthening Exercises</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Our Team" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#coach">Coaching Team</NavDropdown.Item>
                        <NavDropdown.Item href="#advisor">Advisors</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#message">Message</Nav.Link>
                    <Nav.Link href="#partner">Partner</Nav.Link>
                    <Nav.Link href="#enviorment">Teaching Enviorment</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation;