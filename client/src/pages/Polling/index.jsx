import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { setPolls } from "store/actions/polling";
import PollingLink from "components/Polling/PollingLink";
import MembersList from "components/Polling/Members";
import SelectedPolls from "components/Polling/SelectedPolls";
import AvailablePolls from "components/Polling/AvailablePolls";
import { Row, Col } from "react-bootstrap";
import * as API from "api";
import { useCallback } from "react";

const Polling = ({ pollType, userName, sessionUuId, sessionName }) => {
	const [polls, handlePolls] = useState([]);
  const handleCardSelection = (card) => {
		API.pollToSession(userName, sessionUuId, card);
		updatePolls(sessionUuId);
	};
	const updatePolls = (sessionUuId) => {
		if(sessionUuId) {
			const session = API.getSession(sessionUuId);
			handlePolls(session.polls);
		}
	};

	const fetchPollData = useCallback(() => {
		setTimeout(() => {
			updatePolls(sessionUuId);
			fetchPollData();
		}, 500);
	}, [sessionUuId]);

	useEffect(() => {
		if(!(Array.isArray(polls) && polls.length > 0)) fetchPollData();
	});

	const showAllRecords = () => {
		if(Array.isArray(polls) && polls.length > 0) {
			const poll = polls.find((poll) => poll.userName === userName);
			return poll.card !== "" ? true : false;
		}
		return false;
	};

  return (
    <>
      <Row className="justify-content-between h-100 mt-5">
				<Col sm="4" className="ml-1">
	<h4 className="pt-2">{sessionName}</h4>
				</Col>
        <Col sm="4">
          <PollingLink sessionUuId={sessionUuId} />
        </Col>
      </Row>
      <Row className="h-100 mt-2">
        <Col sm="4">
					<MembersList polls={polls} showCards={showAllRecords()} />
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
  const { pollType, userName, sessionUuId, polls, sessionName } = state.polling;
  return {
    pollType,
    userName,
    sessionUuId,
		polls,
		sessionName
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPolls: (polls) => dispatch(setPolls(polls)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polling);
