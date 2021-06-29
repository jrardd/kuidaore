import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>Logo</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/menu" activeStyle>
            m e n u
          </NavLink>
          <NavLink to="/hours" activeStyle>
            h o u r s
          </NavLink>
          <NavLink to="/contact" activeStyle>
            <h1>K U I D A O R E</h1>
          </NavLink>
          <NavLink to="/about" activeStyle>
            a b o u t
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/order">O R D E R</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
