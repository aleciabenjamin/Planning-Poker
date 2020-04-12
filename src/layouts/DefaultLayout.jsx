import React from "react";
import { Container, Navbar } from "react-bootstrap";

const DefaultLayout = (PokerComponent) => {
  return (props) => (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/" className="text-light">
          Planning Poker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <Container className="h-100">
        <PokerComponent {...props} />
      </Container>
    </>
  );
};

export default DefaultLayout;
