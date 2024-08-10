import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/images/logopng.png";
import { FaBagShopping } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import jordenlogo from "../assets/images/jordenLogo.png";
import { useState } from "react";
import Footerji from "./Footer";
function Layout() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const mydata = useSelector((state) => state.cart.cards);
  //console.log(mydata.length);
  const openCart = () => {
    navigate("/cart");
  };
  const openWistlist = () => {
    navigate("/wistlist");
  };
  return (
    <>
      <Navbar
        expand="lg"
        className="bg-body-tertiary navbar-1 fixed-Top navbar1"
        style={{
          backgroundColor: "white ",
          width: "100%",
          height: "45px",
          padding: "20px",
        }}
      >
        {/* <Container fluid className=""> */}
        <Navbar.Brand href="">
          <Link to="home">
            <img src={jordenlogo} alt="" style={{ width: "40px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll " className="justify-content-end">
          <Nav className=" ">
            <Nav.Link href="">
              <Link
                style={{ fontSize: "14px", fontWeight: "normal" }}
                className="links"
                to="signup"
              >
                Join Us
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link
                style={{ fontSize: "14px", fontWeight: "normal" }}
                className="links"
                to="signin"
              >
                Sign in
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      <Navbar expand="lg" className=" navbar2" style={{ padding: "10px" }}>
        {/* <Container fluid style={{ backgroundColor: "white" }}> */}
        <Navbar.Brand href="">
          <Link to="home">
            <img src={logo} alt="" style={{ width: "60px" }} />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <nav className="me-auto my-2 my-lg-0 nav-links"></nav>
          <Nav
            className="me-auto my-2 my-lg-0 nav-links"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="">
              <Link className="links" to="men">
                Men
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="links" to="women">
                Women
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="links" to="kids">
                Kids
              </Link>
            </Nav.Link>
            <Nav.Link href="">
              <Link className="links" to="sale">
                Sale
              </Link>
            </Nav.Link>
          </Nav>
          <Form className="nav-form">
            <Button
              variant="outline-success"
              onClick={() => {
                navigate("/searchItems", { state: { inputData: input } });
              }}
            >
              <FaMagnifyingGlass />
            </Button>
            <input
              type="search"
              placeholder="Search"
              className="input"
              aria-label="Search"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
          </Form>
          <div className="cart" onClick={openCart}>
            <FaBagShopping size={25} style={{}} />
            <div className="cart-count">
              <p>{mydata.length}</p>
            </div>
          </div>
          <div className="cart" onClick={openWistlist}>
            <FaRegHeart size={25} style={{}} />
          </div>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>

      <Nav className="navbar3">
        <p> New Styles on Sale : Upto 40% off</p>
        <h6> Move, Shop, Customise & Celebrate with us</h6>
        <p>No matter what you feel ike today. It's better as a member</p>
      </Nav>

      <Outlet />
      <hr />
      <Footerji />
    </>
  );
}

export default Layout;
