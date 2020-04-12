import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const MembersList = () => {
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        Members
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">
          <ListGroupItem>Member 1</ListGroupItem>
          <ListGroupItem>Member 2</ListGroupItem>
          <ListGroupItem>Member 3</ListGroupItem>
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default MembersList;
