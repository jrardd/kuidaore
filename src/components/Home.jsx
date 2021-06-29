import React from "react";
import { Jumbotron } from "reactstrap";
import "./styles/Home.css";

function Home() {
  return (
    <>
      <Jumbotron className="home-header">
        <h1 className="display-3">This is the Home Page</h1>
      </Jumbotron>
    </>
  );
}

export default Home;
