import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const CreateSessionForm = () => {
  return (
    <Card className="text-center">
      <Card.Header as="h5">Start New Session</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Session Name</Form.Label>
            <Form.Control
              type="text"
              name="sessionName"
              placeholder="Enter session name"
              className="text-center"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              type="text"
              name="userName"
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

export default CreateSessionForm;
