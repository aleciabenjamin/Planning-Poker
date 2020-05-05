import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";

const JoinSessionCard = ({ history, setsessionUuId }) => {
  const [sessionUuId, handlesessionUuId] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (sessionUuId !== "") {
			setsessionUuId(sessionUuId);
      history.push(`/join-session/${sessionUuId}`);
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
          <Form.Group controlId="sessionUuId">
            <Form.Control
              required
							type="text"
              placeholder="Enter Session ID"
              className="text-center"
              value={sessionUuId}
              onChange={(e) => {
                handlesessionUuId(e.target.value);
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
