import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const MembersList = ({ users }) => {
  let usersList = [];
  if (Array.isArray(users) && users.length > 0)
    usersList = users.map((user, i) => {
      return <ListGroup.Item key={i}>{user}</ListGroup.Item>;
    });
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        Members
      </Card.Header>
      <Card.Body className="p-0">
        <ListGroup variant="flush">{usersList}</ListGroup>
      </Card.Body>
    </Card>
  );
};

export default MembersList;
