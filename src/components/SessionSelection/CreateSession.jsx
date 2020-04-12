import React from "react";
import { Card, Button, Form } from "react-bootstrap";

const CreateSessionCard = () => {
  return (
    <Card className="text-center">
      <Card.Header as="h5">Create Session</Card.Header>
      <Card.Body>
        <div className="d-block mb-2">
          <img src="http://via.placeholder.com/200x200" alt="create session" />
        </div>
        <Form>
					<Form.Group controlId="sessionId">
						<Form.Control as="select">
							<option>Fibonacci</option>
							<option>T-Shirt</option>
						</Form.Control>
					</Form.Group>
					<Button variant="primary">Create</Button>
				</Form>
      </Card.Body>
    </Card>
  );
};

export default CreateSessionCard;
