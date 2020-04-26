import React from "react";
import { connect } from "react-redux";
import { setPollType, setSessionId } from "store/actions/polling";
import CreateSessionCard from "components/SessionSelection/CreateSession";
import JoinSessionCard from "components/SessionSelection/JoinSession";
import { Col, Row } from "react-bootstrap";


const SessionSelection = ({ history, setPollType, setSessionId }) => {
  return (
    <Row className="align-items-center h-100 mt-5">
      <Col sm="6">
				<CreateSessionCard history={history} setPollType={setPollType} setSessionId={setSessionId} />
      </Col>
      <Col sm="6">
        <JoinSessionCard history={history} setSessionId={setSessionId} />
      </Col>
    </Row>
  );
};

const mapDispatchToProps = (dispatch) => {
	return {
		setPollType: (pollType) => dispatch(setPollType(pollType)),
		setSessionId: (sessionId) => dispatch(setSessionId(sessionId)),
	}
}

export default connect(null, mapDispatchToProps)(SessionSelection);
