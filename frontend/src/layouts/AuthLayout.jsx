//import * as API from "api"
import Layout from "layouts/DefaultLayout";
import React from "react";
import { connect } from "react-redux";
import * as Action from "store/actions/polling";

const AuthLayout = (PokerComponent) => {
  class Authentication extends React.Component {
    componentDidMount = () => {
      let { pollType, userName, sessionUuId } = this.props;
      const { path } = this.props.match;
      switch (path) {
        case "/create-session/:sessionUuId":
          break;
        case "/join-session/:sessionUuId":
          break;
        case "/polling/:sessionUuId":
          if (
            !(Boolean(userName) && Boolean(pollType) && Boolean(sessionUuId))
          ) {
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
    const {
      pollType,
      sessionUuId,
      sessionName,
      userName,
      polls,
    } = state.polling;
    return {
      pollType,
      sessionUuId,
      sessionName,
      userName,
      polls,
    };
  };

  const mapDispatchToProps = (dispatch) => {
    const { setPollType, setPolls, setsessionUuId, setSessionName } = Action;
    return { setPollType, setPolls, setsessionUuId, setSessionName };
  };

  return Layout(connect(mapStateToProps, mapDispatchToProps)(Authentication));
};

export default AuthLayout;
