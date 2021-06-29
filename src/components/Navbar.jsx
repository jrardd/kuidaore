import React from 'react';
import { Navbar, NavbarBrand, NavLink, Button } from 'reactstrap';
import './styles/Navbar.css';

const Navigation = () => {
  return (
    <Navbar className="navi">
      <NavLink className="menu">m e n u</NavLink>
      <NavLink className="hours">h o u r s</NavLink>
      <NavbarBrand className="site-title" href="#home">
        K U I D A O R E
      </NavbarBrand>
      <NavLink className="about">a b o u t{`   `}u s</NavLink>
      <Button className="order">O R D E R</Button>
    </Navbar>
  );
};

export default Navigation;
