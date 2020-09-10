import React from 'react';
import { Navbar } from 'react-bootstrap';

const style = {
  icon:{
    color: 	'#f7f7f7',
    paddingLeft: "10px"
  },
  text:{
    paddingLeft: "3px"
  }
}

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" className="container-fluid">
        <Navbar.Text className="text-light offset-md-2">Welcome to www.juniorgolf4fun.org</Navbar.Text>
        <Navbar.Text className="offset-md-3">     
            <i class="fas fa-phone" style={style.icon}></i>
            <a href="tel: 206-566-9216" className="text-primary" style={style.text}> 206-566-9216 </a>       
        </Navbar.Text>
        <Navbar.Text >
          <i class="far fa-envelope" style={style.icon}></i>
          <a href="mailto:m.chang1227@gmail.com" className="text-primary" style={style.text}> m.chang1227@gmail.coms</a> 
        </Navbar.Text>
      </Navbar>  
    </div>
  );
}

export default Header;