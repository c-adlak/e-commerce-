import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import DebitCard from "./DebitCard";
import Upi from "./Upi";
import Cod from "./Cod";
import InternetBanking from "./InternetBanking";
const CheckOut = () => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const handleChange = (e) => {
    setSelectedPayment(e.target.value);
    console.log(selectedPayment);
  };
  return (
    <Container>
      <Row>
        <Col className="mt-4" style={{}}>
          <h2>Shipping Details</h2>
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              width: "500px",
              border: "2px solid gray",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <Form.Group className="mb-4" as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGridAddress1">
              <Form.Label>Address</Form.Label>
              <Form.Control placeholder="1234 Main St" />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formGridAddress2">
              <Form.Label>Address 2</Form.Label>
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>

            <Row className="mb-4">
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control />
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Label>State</Form.Label>
                <Form.Select defaultValue="Choose...">
                  <option>Choose...</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3" id="formGridCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>

            <Button variant="success" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
        <Col>
          <div className="payment-method-container">
            <h2>Select payment method</h2>
            <hr />

            <div className="radio-btns-container">
              <div>
                <Form.Check
                  type="radio"
                  id="upi"
                  label="UPI"
                  name="payment-method"
                  value="upi"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  id="internetBanking"
                  label="Internet Banking"
                  name="payment-method"
                  value="internetBanking"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  id="card"
                  label="Debit/Credit Card"
                  name="payment-method"
                  value="card"
                  onChange={handleChange}
                />
              </div>
              <div>
                <Form.Check
                  type="radio"
                  id="cod"
                  label="COD"
                  name="payment-method"
                  value="cod"
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="payment-container">
            {selectedPayment === "upi" ? (
              <Upi />
            ) : selectedPayment === "cod" ? (
              <Cod />
            ) : selectedPayment === "internetBanking" ? (
              <InternetBanking />
            ) : selectedPayment === "card" ? (
              <DebitCard />
            ) : (
              <div>
                <h1>select payment method</h1>
              </div>
            )}
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckOut;
