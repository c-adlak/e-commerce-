import React from "react";
import { addToCart } from "../cartSlice";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaRegHeart } from "react-icons/fa";
import { addToWistlist } from "../wistlistSlice";
const Cards = ({ data }) => {
  const mydata = useSelector((state) => state.cart.cards);
  const mywistlist = useSelector((state) => state.wistlist.favourit);
  //console.log(mydata.length);
  const dispatch = useDispatch();
  let addDataToCart = (id, title, price, description, image, quantity) => {
    dispatch(
      addToCart({
        id: id,
        title: title,
        price: price,
        description: description,
        image_url: image,
        quantity: quantity,
      })
    );
  };
  //--------------------------------------------------------------------------------------------//
  let addDataToWistlist = (id, title, price, description, image, quantity) => {
    dispatch(
      addToWistlist({
        id: id,
        title: title,
        price: price,
        description: description,
        image_url: image,
        quantity: quantity,
      })
    );
  };
  //console.log(mywistlist);
  return (
    <>
      <Card style={{ width: "18rem" }} className="cards">
        <Card.Img
          variant="top"
          src={data.image_url}
          style={{ width: "100%", height: "350px" }}
        />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Title>Price:{data.price}</Card.Title>
          <Card.Text style={{ height: "40px", overflow: "auto" }}>
            {data.description}
          </Card.Text>
          <div className="btns">
            <Button
              variant="dark"
              onClick={() => {
                addDataToCart(
                  data.id,
                  data.title,
                  data.price,
                  data.description,
                  data.image_url,
                  data.quantity
                );
              }}
            >
              Add to Cart
            </Button>
            <Button
              style={{ marginLeft: "130px" }}
              variant="light"
              onClick={() => {
                addDataToWistlist(
                  data.id,
                  data.title,
                  data.price,
                  data.description,
                  data.image_url,
                  data.quantity
                );
              }}
            >
              <FaRegHeart />
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
