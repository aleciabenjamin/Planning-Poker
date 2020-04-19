import React from "react";
import { connect } from "react-redux";
import { setPolls } from "store/actions/polling";
import PollingLink from "components/Polling/PollingLink";
import MembersList from "components/Polling/Members";
import SelectedPolls from "components/Polling/SelectedPolls";
import AvailablePolls from "components/Polling/AvailablePolls";
import { Row, Col } from "react-bootstrap";

const Polling = ({ pollType, userName, sessionId, polls, setPolls }) => {
  const handleCardSelection = (card) => {
    setPolls([{ userName, card }]);
  };
  return (
    <>
      <Row className="justify-content-end h-100 mt-5">
        <Col sm="3">
          <PollingLink sessionId={sessionId} />
        </Col>
      </Row>
      <Row className="h-100 mt-2">
        <Col sm="4">
          <MembersList users={[userName]} />
        </Col>
        <Col sm="8">
          <SelectedPolls polls={polls} />
          <AvailablePolls pollType={pollType} setPolls={handleCardSelection} />
        </Col>
      </Row>
    </>
  );
};

const mapStateToProps = (state) => {
  const { pollType, userName, sessionId, polls } = state.polling;
  return {
    pollType,
    userName,
    sessionId,
    polls,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPolls: (polls) => dispatch(setPolls(polls)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polling);
