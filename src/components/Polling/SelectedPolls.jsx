import React from "react";
import { Row } from "react-bootstrap";
import Card from "components/Polling/Card";

const SelectedPolls = () => {
  return (
    <Row className="border rounded bg-secondary px-2 py-3 mb-2">
      <Card value="2" />
      <Card value="5" />
    </Row>
  );
};

export default SelectedPolls;
