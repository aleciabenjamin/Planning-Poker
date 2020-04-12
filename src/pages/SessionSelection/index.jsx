import React, { Component } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

const CreateSessionCard = () => {
  return (
    <Card className="text-center">
      <Card.Header as="h5">Create Session</Card.Header>
      <Card.Body>
        <div className="d-block mb-2">
          <img src="http://via.placeholder.com/200x200" alt="create session" />
        </div>
        <Button variant="primary">Create</Button>
      </Card.Body>
    </Card>
  );
};

const JoinSessionCard = () => {
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        Join Session
      </Card.Header>
      <Card.Body className="text-center">
        <div className="d-block mb-2">
          <img src="http://via.placeholder.com/200x200" alt="join session" />
        </div>
        <Button variant="primary">Join</Button>
      </Card.Body>
    </Card>
  );
};

class SessionSelection extends Component {
  render() {
    return (
      <Container className="h-100">
        <Row className="align-items-center h-100">
          <Col sm="6">
            <CreateSessionCard />
          </Col>
          <Col sm="6">
            <JoinSessionCard />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SessionSelection;
