import React from "react";
import { Row, Col } from "react-bootstrap";
import PollingLink from "components/Polling/PollingLink";
import MembersList from "components/Polling/Members";
import SelectedPolls from "components/Polling/SelectedPolls";
import AvailablePolls from "components/Polling/AvailablePolls";

const Polling = () => {
  return (
    <>
      <Row className="justify-content-end h-100 mt-5">
        <Col sm="4">
          <PollingLink />
        </Col>
      </Row>
      <Row className="h-100 mt-2">
        <Col sm="4">
          <MembersList />
        </Col>
        <Col sm="8">
          <SelectedPolls />
          <AvailablePolls />
        </Col>
      </Row>
    </>
  );
};

export default Polling;
