import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const Upi = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>UPI Id</Form.Label>
          <Form.Control type="email" placeholder="upi@example" />
        </Form.Group>
        <Button
          variant="success"
          onClick={() => {
            console.log("helo");
            navigate("/success");
          }}
        >
          Proceed to pay
        </Button>
      </Form>
    </div>
  );
};

export default Upi;
