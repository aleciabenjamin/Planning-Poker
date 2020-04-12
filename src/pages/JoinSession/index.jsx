import React from "react";
import { Row, Col } from "react-bootstrap";
import JoinSessionForm from "components/JoinSession/Form";

const JoinSession = () => {
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <JoinSessionForm />
      </Col>
    </Row>
  );
};

export default JoinSession;
