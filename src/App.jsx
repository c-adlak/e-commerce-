import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Men from "./components/Men";
import Women from "./components/Women";
import Kids from "./components/Kids";
import Sale from "./components/Sale";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn";
import Cart from "./components/Cart";
import SearchItems from "./components/SearchItems";
import Wistlist from "./components/Wistlist";
import CheckOut from "./components/CheckOut";
import Success from "./components/Sucess";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="men" element={<Men />} />
            <Route path="women" element={<Women />} />
            <Route path="kids" element={<Kids />} />
            <Route path="sale" element={<Sale />} />
            <Route path="signup" element={<Signup />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="cart" element={<Cart />} />
            <Route path="searchItems" element={<SearchItems />} />
            <Route path="wistlist" element={<Wistlist />} />
            <Route path="checkOut" element={<CheckOut />} />
            <Route path="success" element={<Success />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
