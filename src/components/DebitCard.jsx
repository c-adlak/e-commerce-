import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import cardimg from "../assets/images/cardimg.png";
const DebitCard = () => {
  return (
    <Container>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={cardimg} alt="" width={300} />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1> Pay</h1>
          <h1> Vaia</h1>

          <h1>Card</h1>
        </Col>
      </Row>
      <Row>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button variant="success">Proceed to Pay</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default DebitCard;
