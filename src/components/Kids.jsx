import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "./Cards";
const Kids = () => {
  const [data, setData] = useState([]);
  const gender = "kids";
  useEffect(() => {
    const url = `http://localhost:3000/shoes?gender=${gender}`;
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div className="shop-conatainer">
      {data.map((key) => (
        <Cards key={key.id} data={key} />
      ))}
    </div>
  );
};

export default Kids;
