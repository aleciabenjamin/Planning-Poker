import JoinSessionForm from "components/JoinSession/Form";
import React, { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import {
  setPollType,
  setsessionUuId,
  setSessionName,
  setUserName,
} from "store/actions/polling";

const JoinSession = ({
  history,
  match,
  setsessionUuId,
  setUserName,
  setSessionName,
  setPollType,
}) => {
  useEffect(() => {
    setsessionUuId(match.params.sessionUuId);
  }, [match.params.sessionUuId, setsessionUuId]);
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <JoinSessionForm
          history={history}
          setUserName={setUserName}
          setSessionName={setSessionName}
          setPollType={setPollType}
          sessionUuId={match.params.sessionUuId}
        />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => dispatch(setUserName(userName)),
    setsessionUuId: (sessionUuId) => dispatch(setsessionUuId(sessionUuId)),
    setSessionName: (sessionName) => dispatch(setSessionName(sessionName)),
    setPollType: (pollType) => dispatch(setPollType(pollType)),
  };
};

export default connect(null, mapDispatchToProps)(JoinSession);
