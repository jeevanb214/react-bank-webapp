import React, { Component } from "react";
import { Jumbotron, Container } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Jumbotron fluid className="text-center">
        <Container fluid>
          <h1 className="display-8">MY-BANK</h1>
          <p className="lead">You had choosed one of the best bank.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Home;
