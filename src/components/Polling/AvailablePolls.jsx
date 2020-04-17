import React from "react";
import { Row } from "react-bootstrap";
import Card from "components/Polling/Card";

const SelectedPollSection = () => {
  return (
    <Row className="border rounded px-2 py-3">
      <Card value="0" />
      <Card value="1" />
      <Card value="2" />
      <Card value="3" />
      <Card value="4" />
      <Card value="5" />
      <Card value="6" />
      <Card value="7" />
      <Card value="8" />
      <Card value="9" />
    </Row>
  );
};

export default SelectedPollSection;
