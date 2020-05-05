import React from "react";
import { connect } from "react-redux";
import { saveSessionAction } from "store/actions/polling";
import CreateSessionForm from "components/CreateSession/Form";
import { Row, Col } from "react-bootstrap";

const CreateSession = ({ history, match, pollType, saveSession }) => {
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <CreateSessionForm
          history={history}
          pollType={pollType}
          sessionUuid={match.params.sessionId}
          saveSession={saveSession}
        />
      </Col>
    </Row>
  );
};

const mapStateToProps = (state) => {
  return {
    pollType: state.polling.pollType,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveSession: (userName, sessionName) =>
      dispatch(saveSessionAction(userName, sessionName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSession);
