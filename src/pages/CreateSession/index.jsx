import React from "react";
import { connect } from "react-redux";
import { setSessionName, setUserName } from "store/actions/polling";
import CreateSessionForm from "components/CreateSession/Form";
import { Row, Col } from "react-bootstrap";

const CreateSession = ({
  history,
  match,
  pollType,
  setSessionName,
  setUserName,
}) => {
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <CreateSessionForm
          history={history}
          pollType={pollType}
          sessionId={match.params.sessionId}
          setSessionName={setSessionName}
          setUserName={setUserName}
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
    setSessionName: (sessionName) => dispatch(setSessionName(sessionName)),
    setUserName: (userName) => dispatch(setUserName(userName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateSession);
