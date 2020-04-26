//import * as API from "api"
import Layout from "layouts/DefaultLayout";
import React from "react";
import { connect } from "react-redux";
import * as Action from "store/actions/polling";

const AuthLayout = (PokerComponent) => {
  class Authentication extends React.Component {
    componentDidMount = () => {
      let { pollType, userName, sessionId } = this.props;
      const { path } = this.props.match;
      switch (path) {
        case "/create-session/:sessionId":
          break;
        case "/join-session/:sessionId":
          break;
        case "/polling/:sessionId":
          if (!(Boolean(userName) && Boolean(pollType) && Boolean(sessionId))) {
            this.redirectToHome();
          }
          break;
        default:
      }
    };
    redirectToHome = () => {
      window.location.replace("/");
    };
    render() {
      return (
        <>
          <PokerComponent {...this.props} />
        </>
      );
    }
  }

  const mapStateToProps = (state) => {
    const { pollType, sessionId, sessionName, userName, polls } = state.polling;
    return {
      pollType,
      sessionId,
      sessionName,
      userName,
      polls,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    const { setPollType, setPolls, setSessionId, setSessionName } = Action;
    return { setPollType, setPolls, setSessionId, setSessionName };
  };

  return Layout(connect(mapStateToProps, mapDispatchToProps)(Authentication));
};

export default AuthLayout;
