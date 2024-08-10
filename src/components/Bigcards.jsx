import React from "react";

const Bigcards = ({ data }) => {
  // console.log(data);
  return (
    <>
      <div
        className="bigcard-card"
        style={{
          backgroundImage: `url(${data.image})`,
        }}
      >
        <div className="bigcard-content">
          <h5 style={{ color: "white" }}>{data.title}</h5>
          <h4 style={{ color: "white" }}>{data.description}</h4>
          <button
            style={{
              borderRadius: "30px",
              backgroundColor: "white",
              color: "black",
              fontSize: "18px",
              padding: "5px 20px",
              border: "none",
            }}
          >
            shop
          </button>
        </div>
      </div>
    </>
  );
};

export default Bigcards;
