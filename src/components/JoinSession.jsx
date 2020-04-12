import React from "react";
import { Card, Button } from "react-bootstrap";

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

export default JoinSessionCard;
