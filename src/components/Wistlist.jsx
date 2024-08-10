import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { removeToWistlist } from "../wistlistSlice";

const Wistlist = () => {
  const [count, setCount] = useState(0);
  let c = 0;
  const wistlistData = useSelector((state) => state.wistlist.favourit);
  let dispatch = useDispatch();
  //console.log(wistlistData);

  let wistlist = wistlistData.map((item) => {
    c++;
    return (
      <>
        <hr className="my-4" />
        <MDBRow className="mb-4 d-flex justify-content-between align-items-center">
          <MDBCol md="2" lg="2" xl="2">
            <MDBCardImage
              src={item.image_url}
              fluid
              className="rounded-3"
              alt="Cotton T-shirt"
            />
          </MDBCol>
          <MDBCol md="3" lg="3" xl="3">
            <MDBTypography tag="h6" className="text-muted">
              {item.title}
            </MDBTypography>
            <MDBTypography tag="h6" className="text-black mb-0">
              {/* {item.description} */}
            </MDBTypography>
          </MDBCol>
          <MDBCol
            md="3"
            lg="3"
            xl="3"
            className="d-flex align-items-center"
          ></MDBCol>
          <MDBCol md="3" lg="2" xl="2" className="text-end">
            <MDBTypography tag="h6" className="mb-0">
              ₹ {item.price}
            </MDBTypography>
          </MDBCol>
          <MDBCol md="1" lg="1" xl="1" className="text-end">
            <a href="#!" className="text-muted">
              <MDBIcon
                fas
                icon="times"
                onClick={() => {
                  dispatch(removeToWistlist(item.id));
                }}
              />
            </a>
          </MDBCol>
        </MDBRow>
        <hr className="my-4" />
      </>
    );
  });
  return (
    <div>
      <>
        <section className="h-100 h-custom" style={{ backgroundColor: "#eee" }}>
          <MDBContainer className="py-5 h-100">
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol size="12">
                <MDBCard
                  className="card-registration card-registration-2"
                  style={{ borderRadius: "15px" }}
                >
                  <MDBCardBody className="p-0">
                    <MDBRow className="g-0">
                      <MDBCol lg="">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <MDBTypography
                              tag="h1"
                              className="fw-bold mb-0 text-black"
                            >
                              Wishlist
                            </MDBTypography>
                            <MDBTypography className="mb-0 text-muted">
                              {c} items
                            </MDBTypography>
                          </div>

                          {/* dynamic data */}
                          {wistlist}
                          {/* --------------- */}

                          <div className="pt-5">
                            <MDBTypography tag="h6" className="mb-0">
                              <MDBCardText
                                tag="a"
                                href="/men"
                                className="text-body"
                              >
                                <MDBIcon fas icon="long-arrow-alt-left me-2" />{" "}
                                Back to shop
                              </MDBCardText>
                            </MDBTypography>
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </section>
      </>
    </div>
  );
};

export default Wistlist;
