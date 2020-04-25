import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const MembersList = ({ polls }) => {
  let usersList = [];
  if (Array.isArray(polls) && polls.length > 0)
    usersList = polls.map(({ userName, card }, i) => {
      return (
        <ListGroup.Item key={i}>
          {card === "" ? (
            <span
              className="text-warning mr-2"
              role="img"
              aria-label="exclamation"
            >
              &#10069;
            </span>
          ) : (
            <span className="text-success mr-2" role="img" aria-label="tick">
              &#10004;
            </span>
          )}
          {userName}
        </ListGroup.Item>
      );
    });
  return (
    <Card>
      <Card.Header as="h5" className="text-center">
        Members
      </Card.Header>
      <Card.Body className="p-0 members-list">
        <ListGroup variant="flush">{usersList}</ListGroup>
      </Card.Body>
    </Card>
  );
};

export default MembersList;
