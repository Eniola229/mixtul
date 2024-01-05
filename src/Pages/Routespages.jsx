import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Firstpage from "../componenets/Firstpage";
import Shop from "./Shop";
import About from "./About";
import React, { useState } from 'react';
import Contact from "./Contact";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import ALogin from "../Admin/Login";
import Home from "../Admin/Home";
import Corders from "../Admin/Corders";
import Shopproducts from "../Admin/Shopproducts";
import Userlist from "../Admin/Userlist";
import UpdateProduct from "../Admin/UpdateProduct";
export default function Routespages() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Firstpage />} />
        <Route path="/Shop" element={<Shop/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/ALogin" element={<ALogin/>} />
        <Route path="/Home" element={<Home/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Corders" element={<Corders/>} />
        <Route path="/Shopproducts" element={<Shopproducts/>} />
        <Route path="/Userlist" element={<Userlist/>} />
        <Route path="/UpdateProduct" element={<UpdateProduct/>} />
      </Routes>
    </Router>
  );
}