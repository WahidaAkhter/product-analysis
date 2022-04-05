import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import image from '../../images/logo_v4.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
    
      
      <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={image}
            width="120"
            height="50"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
    <Nav className="ms-auto">
      <Link className='ms-4 nav-color' to ='/home'>Home</Link>
      <Link className='ms-4 nav-color'to ='/reviews'>Reviews</Link>
      <Link className='ms-4 nav-color'to ="/dashboard">Dashboard</Link>
      <Link className='ms-4 nav-color'to ="/blog">Blogs</Link>
      <Link className='ms-4 nav-color'to ="about">About</Link>
    </Nav>
      </Container>
    </Navbar>

    );
};

export default Header;