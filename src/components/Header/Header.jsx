import React from 'react';
import { Navbar } from 'react-bootstrap';
import '../../styles/Header.css';


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" className="nav">
        <Navbar.Text className="text-light offset-md-2 text-sec">Welcome to www.juniorgolf4fun.org</Navbar.Text>
        <Navbar.Text className="offset-lg-4">     
            <i class="fas fa-phone icon" ></i>
            <a href="tel: 206-566-9216" className="text-primary" > 206-566-9216 </a>       
        </Navbar.Text>
        <Navbar.Text >
          <i class="far fa-envelope icon" ></i>
          <a href="mailto:m.chang1227@gmail.com" className="text-primary" > m.chang1227@gmail.coms</a> 
        </Navbar.Text>
      </Navbar>  
    </div>
  );
}

export default Header;
