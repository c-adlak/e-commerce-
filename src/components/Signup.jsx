import React from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Signup() {
  return (
    <MDBContainer
      fluid
      className="d-flex align-items-center justify-content-center bg-image"
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1695508874991-8aeda659adcd?q=80&w=1905&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        width: "100%",

        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="mask gradient-custom-3"></div>
      <MDBCard className="m-5 signup-container">
        <MDBCardBody className="px-5 signup-container-inner">
          <h2 className="text-uppercase text-center mb-5">Create an account</h2>
          <MDBInput
            wrapperClass="mb-4"
            label="Your Name"
            size="lg"
            id="form1"
            type="text"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Your Email"
            size="lg"
            id="form2"
            type="email"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Password"
            size="lg"
            id="form3"
            type="password"
          />
          <MDBInput
            wrapperClass="mb-4"
            label="Repeat your password"
            size="lg"
            id="form4"
            type="password"
          />
          <div className="d-flex flex-row justify-content-center mb-4">
            <MDBCheckbox
              name="flexCheck"
              id="flexCheckDefault"
              label="I agree all statements in Terms of service"
            />
          </div>
          <button className="register-btn">Register</button>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
