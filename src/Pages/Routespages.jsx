import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Firstpage from "../componenets/Firstpage";
import Shop from "./Shop"
import Cart from "../Products/Cart"
import React, { useState } from 'react';
export default function Routespages() {

  const [cartItems, setCartItems] = useState([]);
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Shop" element={<Shop cartItems={cartItems} setCartItems={setCartItems}/>} />
        <Route path="/Cart" element={<Cart cartItems={cartItems}/>} />
      </Routes>
    </Router>
  );
}