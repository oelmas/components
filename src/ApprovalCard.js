import React from "react";
import { Button, ButtonToolbar, Card } from "react-bootstrap";

const ApprovalCard = props => {
  return (
    <div className="Card">
      <Card
        className="Card Details"
        bg="secondary"
        border="warning"
        text="white"
        style={{ width: "18rem" }}
      >
        <Card.Body>
          <div>{props.children}</div>
          <div className="btn-group" role="group" aria-label="Basic example">
            <ButtonToolbar>
              <Button variant="success">Approve</Button>
              <Button variant="danger">Reject</Button>
            </ButtonToolbar>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ApprovalCard;
