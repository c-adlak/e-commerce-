import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import Cards from "./Cards";
const SearchItems = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const { inputData } = location.state || {}; // Destructure and provide a fallback

  useEffect(() => {
    const url = `http://localhost:3000/shoes?category=${inputData}`;
    axios
      .get(url)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error occured");
      });
  }, [inputData]);

  return (
    <div className="shop-conatainer">
      {data.map((item) => (
        <Cards data={item} />
      ))}
    </div>
  );
};

export default SearchItems;
