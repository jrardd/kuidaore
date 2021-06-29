import React from "react";
import { Navbar, NavbarBrand, NavLink, Button } from "reactstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
import Hours from "./Hours";
import About from "./About";
import "./styles/Navbar.css";

const Navigation = () => {
  return (
    <Router>
      <Navbar className="navi">
        <NavLink className="menu nav" href="/menu">
          <h2>m e n u</h2>
        </NavLink>
        <NavLink className="hours nav" href="/hours">
          <h2>h o u r s</h2>
        </NavLink>
        <NavbarBrand className="site-title nav" href="/">
          <h1>K U I D A O R E</h1>
        </NavbarBrand>
        <NavLink className="about nav" href="/about">
          <h2>a b o u t{`   `}u s</h2>
        </NavLink>
        <Button className="order-btn">
          <h2>O R D E R</h2>
        </Button>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/menu" component={Menu} />
        <Route path="/hours" component={Hours} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default Navigation;
