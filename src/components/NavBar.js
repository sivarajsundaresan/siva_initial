import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar className="justify-content-end" bg="dark" variant="dark">
        <Nav.Item>
          <Link to='/' className="nav-link">Home</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/registration' className="nav-link">Registation</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to='/login' className="nav-link">Login</Link>
        </Nav.Item>
    </Navbar>
  );
}

export default NavBar;