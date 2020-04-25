import JoinSessionForm from "components/JoinSession/Form";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  setPollType,
  setSessionId,
  setSessionName,
  setUserName,
} from "store/actions/polling";

const JoinSession = ({
  history,
  match,
  setSessionId,
  setUserName,
  setSessionName,
  setPollType,
}) => {
  useEffect(() => {
    setSessionId(match.params.sessionId);
  }, [match.params.sessionId, setSessionId]);
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <JoinSessionForm
          history={history}
          setUserName={setUserName}
          setSessionName={setSessionName}
          setPollType={setPollType}
          sessionId={match.params.sessionId}
        />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => dispatch(setUserName(userName)),
    setSessionId: (sessionId) => dispatch(setSessionId(sessionId)),
    setSessionName: (sessionName) => dispatch(setSessionName(sessionName)),
    setPollType: (pollType) => dispatch(setPollType(pollType)),
  };
};

export default connect(null, mapDispatchToProps)(JoinSession);
