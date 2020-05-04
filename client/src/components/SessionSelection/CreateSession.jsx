import React, { Component } from "react";
import uuid from "uuid/v4";
import { Card, Button, Form } from "react-bootstrap";

class CreateSessionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pollType: "",
    };
  }

  componentDidUpdate = () => {
    const { pollTypesList } = this.props;
    const { pollType } = this.state;
    if (
      Array.isArray(pollTypesList) &&
      pollTypesList.length > 0 &&
      pollType === ""
    )
      this.setState({ pollType: pollTypesList[0].title });
  };

  onChange = (e) => {
    const { value } = e.target;
    this.setState({
      pollType: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const sessionId = uuid();
    this.props.setPollType(this.state.pollType);
    this.props.setSessionId(sessionId);
    this.props.history.push(`/create-session/${sessionId}`);
  };

  render() {
		const { pollType } = this.state;
    const { pollTypesList } = this.props;
    return (
      <Card className="text-center">
        <Card.Header as="h5">Create Session</Card.Header>
        <Card.Body>
          <div className="d-block mb-2">
            <img
              src="http://via.placeholder.com/200x200"
              alt="create session"
            />
          </div>
          <Form onSubmit={this.onSubmit}>
            <Form.Group controlId="sessionId">
              <Form.Control
                as="select"
                onChange={this.onChange}
                value={pollType}
              >
                {pollTypesList.length > 0 &&
                  pollTypesList.map((poll) => (
                    <option key={poll.id} value={poll.title}>
                      {poll.title}
                    </option>
                  ))}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default CreateSessionCard;
