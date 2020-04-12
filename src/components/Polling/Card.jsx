import React from "react";
import { Card as BSCard, Col } from "react-bootstrap";

const Card = ({ value }) => {
  return (
    <Col sm="3" className="text-center mb-2">
      <BSCard>
        <BSCard.Body>{value}</BSCard.Body>
      </BSCard>
    </Col>
  );
};

export default Card;
