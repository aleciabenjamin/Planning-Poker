import CreateSessionCard from "components/JoinSession/CreateSession";
import JoinSessionCard from "components/SessionSelection/JoinSession";
import React from "react";
import { Col, Container, Navbar, Row } from "react-bootstrap";

const SessionSelection = () => {
  return (
    <>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="/" className="text-light">
          Planning Poker
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
      <Container className="h-100">
        <Row className="align-items-center h-100 mt-5">
          <Col sm="6">
            <CreateSessionCard />
          </Col>
          <Col sm="6">
            <JoinSessionCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SessionSelection;
