import React from "react";
import { Row } from "react-bootstrap";
import Card from "components/Polling/Card";

const SelectedPollSection = ({ polls, showCards }) => {
  let pollsList = [];
  if (Array.isArray(polls) && polls.length > 0)
    pollsList = polls.map(({ userName, poll }, i) => {
      return (
        <Card key={i} value={showCards ? poll : "unknown"} label={userName} />
      );
    });

  return (
    <div className="selected-polls">
      <Row className="border rounded px-2 py-3 mb-2">{pollsList}</Row>
    </div>
  );
};

export default SelectedPollSection;
