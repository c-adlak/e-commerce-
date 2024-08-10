import axios from "axios";
import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import video1 from "../assets/images/video1.webm";
import UncontrolledExample from "./Carousels";
import Cards from "./Cards";
import Bigcards from "./Bigcards";
import poster from "../assets/images/poster.png";
import poster2 from "../assets/images/poster2.jpg";

const Home = () => {
  const [data, setData] = useState([]);
  const [carddata, setCardData] = useState([]);
  let loadData = () => {
    const url = `http://localhost:3000/shoes`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    loadData();
  }, []);

  let cards = data.map((key) => {
    return (
      <>
        <Cards key={key.id} data={key} />
      </>
    );
  });
  //----------------- array of object for big cards--------------------
  let bigcard = [
    {
      title: "Jorden Basketball",
      description: "Tatum 2 'Danim '",
      image:
        "https://images.unsplash.com/photo-1530511250146-026c208e059e?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Mad Brilliance Pack",
      description: "Play Mad Brilliant",
      image:
        "https://images.unsplash.com/photo-1565604085891-f0edf1b179f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "",
      description: "Ace the Court",
      image:
        "https://images.unsplash.com/photo-1608145596061-c0796f01f3b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  useEffect(() => {
    setCardData(bigcard);
  }, []);

  let bigcardData = carddata.map((key) => {
    return (
      <>
        <Bigcards data={key} />
      </>
    );
  });
  return (
    <>
      <div className="container-outer">
        <div className="container-inner">
          <div className="video-container">
            <video width="100%" height="60%" autoPlay loop muted>
              <source src={video1} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="container-highlights">
            <div className="container-highlights-content"></div>
            <h6>Lifestyle Running Shoes</h6>
            <h1 className="main-heading">EXTRA-ORDINARY</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              suscipit blanditiis nobis
            </p>
            <div className="container-highlights-btn">
              <Button variant="dark" className="btn">
                Buy It
              </Button>
              <Button variant="dark" className="btn">
                Style It
              </Button>
            </div>
          </div>

          <div className="carousel">
            <UncontrolledExample />
          </div>
          <h2>Featured</h2>
          <div className="big-card-container">{bigcardData}</div>

          {/* <div className="card-container">{cards}</div> */}

          <div className="container-highlights">
            <div className="container-highlights-content"></div>
            <h6></h6>
            <h1 className="main-heading">Sky' No Limits</h1>
            <p style={{ textAlign: "center" }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              suscipit blanditiis nobis Lorem ipsum, <br /> dolor sit amet
              consectetur adipisicing elit. Laborum, illo?
            </p>
            <div className="container-highlights-btn">
              {/* <Button variant="dark" className="btn">
                Buy It
              </Button> */}
              <Button variant="dark" className="btn">
                Shop
              </Button>
            </div>
          </div>

          <div className="poster-img">
            <img src={poster} alt="" style={{ width: "100%" }} />
            <img src={poster2} alt="" style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
