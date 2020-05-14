import React from "react";
import { Row } from "react-bootstrap";
import Card from "components/Polling/Card";

const SelectedPollSection = ({ pollType, setPolls }) => {
  return (
    <Row className="border rounded px-2 py-3">
      {pollType && pollType.toLowerCase() === "fibonacci" && (
        <>
          <Card value="0" handleClick={setPolls} />
          <Card value="0.5" handleClick={setPolls} />
          <Card value="1" handleClick={setPolls} />
          <Card value="2" handleClick={setPolls} />
          <Card value="3" handleClick={setPolls} />
          <Card value="5" handleClick={setPolls} />
          <Card value="8" handleClick={setPolls} />
          <Card value="13" handleClick={setPolls} />
          <Card value="20" handleClick={setPolls} />
          <Card value="40" handleClick={setPolls} />
          <Card value="100" handleClick={setPolls} />
          <Card value="101" handleClick={setPolls} />
        </>
      )}

      {pollType && pollType.toLowerCase() === "t-shirts" && (
        <>
          <Card value="xs" handleClick={setPolls} />
          <Card value="sm" handleClick={setPolls} />
          <Card value="md" handleClick={setPolls} />
          <Card value="lg" handleClick={setPolls} />
          <Card value="xl" handleClick={setPolls} />
          <Card value="xxl" handleClick={setPolls} />
        </>
      )}
    </Row>
  );
};

export default SelectedPollSection;
