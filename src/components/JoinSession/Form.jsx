import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const JoinSessionForm = () => {
  return (
    <Card className="text-center">
      <Card.Header as="h5">Join Session</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              className="text-center"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Join
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default JoinSessionForm;
