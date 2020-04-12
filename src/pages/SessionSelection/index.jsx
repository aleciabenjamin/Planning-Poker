import CreateSessionCard from "components/SessionSelection/CreateSession";
import JoinSessionCard from "components/SessionSelection/JoinSession";
import React from "react";
import { Col, Row } from "react-bootstrap";

const SessionSelection = () => {
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6">
        <CreateSessionCard />
      </Col>
      <Col sm="6">
        <JoinSessionCard />
      </Col>
    </Row>
  );
};

export default SessionSelection;
