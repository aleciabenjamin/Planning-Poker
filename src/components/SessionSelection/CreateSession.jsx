import React from "react";
import { Card, Button } from "react-bootstrap";

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

export default CreateSessionCard;
