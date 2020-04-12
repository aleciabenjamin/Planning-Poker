import React from "react";
import { Card, Button, Form } from "react-bootstrap";

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
        <Form>
          <Form.Group controlId="sessionId">
            <Form.Control type="text" placeholder="Enter Session ID" />
          </Form.Group>
          <Button variant="primary">Join</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default JoinSessionCard;
