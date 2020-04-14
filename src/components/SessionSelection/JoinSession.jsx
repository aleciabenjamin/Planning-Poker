import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const JoinSessionCard = ({ history }) => {
  const [sessionId, handleSessionId] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (sessionId !== "") {
      history.push("/join-session");
    }
  };
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        Join Session
      </Card.Header>
      <Card.Body className="text-center">
        <div className="d-block mb-2">
          <img src="http://via.placeholder.com/200x200" alt="join session" />
        </div>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="sessionId">
            <Form.Control
              required
              type="text"
              placeholder="Enter Session ID"
              className="text-center"
              value={sessionId}
              onChange={(e) => {
                handleSessionId(e.target.value);
              }}
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

export default JoinSessionCard;
