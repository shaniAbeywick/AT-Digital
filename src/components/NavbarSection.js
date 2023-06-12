import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/Navbar.css';
import Logo from '../assets/White Logo.png'


function NavbarSection() {
  return (
    <div>
      <Navbar className='navbar' expand="lg">
      <Container>
      <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="238.89"
              height="36.11"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="me-auto">
            <Nav.Link href="#home">SERVICES</Nav.Link>
            <Nav.Link href="#link">ABOUT US</Nav.Link>
            <Nav.Link href="#link">CONTACT US</Nav.Link>
            <Nav.Link href="#link">CAREERS</Nav.Link>
            
              
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </div>
  )
}

export default NavbarSection;


