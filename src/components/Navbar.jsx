import React from 'react';
import { Navbar, NavbarBrand, NavLink, Button } from 'reactstrap';
import './styles/Navbar.css';

const Navigation = () => {
  return (
    <Navbar className="navi">
      <NavLink className="menu nav">
        <h2>m e n u</h2>
      </NavLink>
      <NavLink className="hours nav">
        <h2>h o u r s</h2>
      </NavLink>
      <NavbarBrand className="site-title nav" href="#home">
        <h1>K U I D A O R E</h1>
      </NavbarBrand>
      <NavLink className="about nav">
        <h2>a b o u t{`   `}u s</h2>
      </NavLink>
      <Button className="order-btn">
        <h2>O R D E R</h2>
      </Button>
    </Navbar>
  );
};

export default Navigation;
