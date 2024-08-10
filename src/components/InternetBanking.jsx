import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import itrbnkimg from "../assets/images/internetbankingimg.png";
const InternetBanking = () => {
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
          <img src={itrbnkimg} alt="" width={300} />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1> Internet</h1>

          <h1>Banking</h1>
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

export default InternetBanking;
