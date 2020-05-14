import React from "react";
import { Form } from "react-bootstrap";

const PollingLink = ({ sessionUuId }) => {
  return (
    <Form>
      <Form.Group controlId="pollingLink">
        <Form.Control
          type="text"
          name="pollingLink"
          placeholder="Polling Link"
          className="text-center"
          readOnly={true}
          //value={`https://aleciabenjamin.github.io/join-session/${
          //sessionUuId ? sessionUuId : ""
					//}`}
					value={`${sessionUuId ? sessionUuId : "" }`}
        />
      </Form.Group>
    </Form>
  );
};

export default PollingLink;
