import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import "components/Polling/styles.scss";

const PollingLink = ({ sessionUuId }) => {
  const [copied, handleCopied] = useState(false);
  return (
    <Form>
      <Form.Group controlId="pollingLink" className="text-right">
        <Form.Control
          type="text"
          name="pollingLink"
          placeholder="Polling Link"
          className="polling-uuid-field text center d-inline-block"
          readOnly={true}
          value={`${sessionUuId ? sessionUuId : ""}`}
        />
        <CopyToClipboard
          text={`${sessionUuId ? sessionUuId : ""}`}
          onCopy={() => handleCopied(true)}
        >
          <Button
            variant="link"
            className="copy-to-clipboard-btn"
            onClick={(e) => e.preventDefault()}
            title="Copy to Clipboard"
          >
            <FontAwesomeIcon icon={faCopy} />
          </Button>
        </CopyToClipboard>
        {copied ? (
          <span className="text-success">Copied to Clipboard!</span>
        ) : null}
      </Form.Group>
    </Form>
  );
};

export default PollingLink;
