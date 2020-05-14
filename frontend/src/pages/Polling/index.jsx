import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setPolls,
  savePollToSessionAction,
  getSessionPollsAction,
} from "store/actions/polling";
import PollingLink from "components/Polling/PollingLink";
import Members from "components/Polling/Members";
import SelectedPolls from "components/Polling/SelectedPolls";
import AvailablePolls from "components/Polling/AvailablePolls";
import { Row, Col } from "react-bootstrap";

class Polling extends Component {
  constructor(props) {
    super(props);
    this.interval = null;
    this.state = {
      polls: [],
    };
  }
  componentDidMount() {
    this.initiateRecursivePolls();
    this.handleCardSelection("");
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  setPolls = (polls) => this.setState({ polls });

  initiateRecursivePolls = () => {
    this.interval = setTimeout(() => {
			this.updatePolls();
			this.initiateRecursivePolls();
		}, 3000);
  };

  updatePolls = () => {
    const { getSessionPolls, sessionId } = this.props;
    getSessionPolls(sessionId).then((resp) => {
      this.setPolls(resp);
    });
  };

  handleCardSelection = (card) => {
    const { savePollToSession, userName } = this.props;
    savePollToSession(userName, card).then((poll) => {
      this.updatePolls();
    });
  };

  hasPolled = () => {
    const { polls } = this.state;
    const { userName } = this.props;
    if (Array.isArray(polls) && polls.length > 0) {
      const userPoll = polls.find((poll) => poll.userName === userName);
      return userPoll.poll !== "" ? true : false;
    }
    return false;
  };

  render() {
    const { pollType, sessionUuId, sessionName } = this.props;
    const { polls } = this.state;
    console.log("polls::::", polls);
    return (
      <>
        <Row className="justify-content-between h-100 mt-5">
          <Col sm="4" className="ml-1">
            <h4 className="pt-2 sessionName">{sessionName}</h4>
          </Col>
          <Col sm="4">
            <PollingLink sessionUuId={sessionUuId} />
          </Col>
        </Row>
        <Row className="h-100 mt-2">
          <Col sm="3">
            <Members polls={polls} />
          </Col>
          <Col sm="9">
            <SelectedPolls polls={polls} showCards={this.hasPolled()} />
            <AvailablePolls
              pollType={pollType}
              setPolls={this.handleCardSelection}
            />
          </Col>
        </Row>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const {
    sessionId,
    pollType,
    userName,
    sessionUuId,
    polls,
    sessionName,
  } = state.polling;
  return {
    sessionId,
    pollType,
    userName,
    sessionUuId,
    polls,
    sessionName,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPolls: (polls) => dispatch(setPolls(polls)),
    savePollToSession: (userName, poll) =>
      dispatch(savePollToSessionAction(userName, poll)),
    getSessionPolls: (sessionId) => dispatch(getSessionPollsAction(sessionId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Polling);
