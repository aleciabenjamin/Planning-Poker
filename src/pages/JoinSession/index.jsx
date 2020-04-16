import React from "react";
import { connect } from "react-redux";
import { setUserName } from "store/actions/polling";
import JoinSessionForm from "components/JoinSession/Form";
import { Row, Col } from "react-bootstrap";

const JoinSession = ({ history, match, setUserName }) => {
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6" className="mx-auto">
        <JoinSessionForm
          history={history}
          setUserName={setUserName}
          sessionId={match.params.sessionId}
        />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (userName) => dispatch(setUserName(userName)),
  };
};

export default connect(null, mapDispatchToProps)(JoinSession);
