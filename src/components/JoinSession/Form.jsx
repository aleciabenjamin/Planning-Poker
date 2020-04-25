import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import * as API from "api";
import { setSessionName } from "store/actions/polling";

const JoinSessionForm = ({ history, sessionId, setUserName, setPollType }) => {
  const [userName, handleUserName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (userName !== "") {
			const session = API.getSession(sessionId);
			setUserName(userName);
			setSessionName(session.sessionName);
			setPollType(session.pollType);
			API.joinSession(userName, sessionId);
      history.push(`/polling/${sessionId}`);
    }
  };
  return (
    <Card className="text-center">
      <Card.Header as="h5">Join Session</Card.Header>
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              required
							type="text"
							autoComplete={false}
              placeholder="Enter your name"
              className="text-center"
              value={userName}
              onChange={(event) => handleUserName(event.target.value)}
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
