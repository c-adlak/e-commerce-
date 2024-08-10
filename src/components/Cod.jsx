import React from "react";
import codimg from "../assets/images/codImg.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Cod = () => {
  const navigate = useNavigate();
  const opensuccess = () => {
    console.log("hello");
    navigate("/success");
  };
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
          <img src={codimg} alt="" width={300} />
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1> Cash</h1>
          <h1>On</h1>
          <h1>Delivery</h1>
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
          <Button variant="success" onClick={opensuccess}>
            place Order
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cod;
