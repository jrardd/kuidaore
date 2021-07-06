import React from "react";
import { Container, Media, Jumbotron } from "reactstrap";
import floral from "../assets/icons/header-golden-floral.png";
import "./styles/Header.css";

function Header({ title, description }) {
  return (
    <Jumbotron className="header-component">
      <h1>{title}</h1>
      <h3 className="header-description">{description}</h3>
    </Jumbotron>
  );
}

export default Header;
