import React from "react";
import { Form } from "react-bootstrap";

const PollingLink = () => {
  return (
    <Form>
      <Form.Group controlId="pollingLink">
        <Form.Control
          type="text"
          name="pollingLink"
          placeholder="Polling Link"
          className="text-center"
          readOnly={true}
          value="http://localhost/static-link/for/prototype"
        />
      </Form.Group>
    </Form>
  );
};

export default PollingLink;
