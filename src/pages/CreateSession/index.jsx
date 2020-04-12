import React from "react";
import { Row, Col } from "react-bootstrap";
import CreateSessionForm from "components/CreateSession/Form";

const CreateSession = () => {
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <CreateSessionForm />
      </Col>
    </Row>
  );
};

export default CreateSession;
