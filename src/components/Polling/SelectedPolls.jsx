import React from "react";
import { Row } from "react-bootstrap";
import Card from "components/Polling/Card";

const SelectedPollSection = ({ polls }) => {
  let pollsList = [];
  if (Array.isArray(polls) && polls.length > 0)
    pollsList = polls.map((poll, i) => {
      return <Card value={poll.card} />;
    });
  return (
    <Row className="border rounded bg-secondary px-2 py-3 mb-2">
      {pollsList}
    </Row>
  );
};

export default SelectedPollSection;
