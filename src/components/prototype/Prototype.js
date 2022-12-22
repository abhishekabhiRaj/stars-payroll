import React from "react";
import { Row, Col } from "react-bootstrap";

const Prototype = ({ data }) => {
  return (
    <Row>
      <Col className="m-1">
        {data}
      </Col>
    </Row>
  )
}

export default Prototype;