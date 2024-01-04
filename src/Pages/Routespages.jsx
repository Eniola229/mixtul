import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Firstpage from "../componenets/Firstpage";
import Shop from "./Shop";
import About from "./About";
import Cart from "../Products/Cart"
import React, { useState } from 'react';
import Contact from "./Contact";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ALogin from "../Admin/Login";
import Home from "../Admin/Home";
import Corders from "../Admin/Corders";
import Shopproducts from "../Admin/Shopproducts";


export default function Routespages() {

  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/Cart" element={<Cart cartItems={cartItems}/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ALogin" element={<ALogin/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Corders" element={<Corders/>} />
        <Route path="/Shopproducts" element={<Shopproducts/>} />
      </Routes>
    </Router>
  );
}