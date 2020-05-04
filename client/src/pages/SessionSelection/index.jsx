import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  setPollType,
  setSessionId,
  fetchPollTypesListAction,
} from "store/actions/polling";
import CreateSessionCard from "components/SessionSelection/CreateSession";
import JoinSessionCard from "components/SessionSelection/JoinSession";
import { Col, Row } from "react-bootstrap";

const SessionSelection = ({
  history,
  setPollType,
  setSessionId,
  fetchPollTypesList,
  pollTypesList,
}) => {
  useEffect(() => {
    fetchPollTypesList();
  }, [fetchPollTypesList]);
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6">
        <CreateSessionCard
          history={history}
          setPollType={setPollType}
          setSessionId={setSessionId}
          pollTypesList={pollTypesList}
        />
      </Col>
      <Col sm="6">
        <JoinSessionCard history={history} setSessionId={setSessionId} />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    pollTypesList: state.polling.pollTypesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPollType: (pollType) => dispatch(setPollType(pollType)),
    setSessionId: (sessionId) => dispatch(setSessionId(sessionId)),
    fetchPollTypesList: () => dispatch(fetchPollTypesListAction()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionSelection);
