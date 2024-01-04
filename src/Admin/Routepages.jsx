import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import Login from "./Login";
import Home from "./Home";
import Corders from "./Corders";
import Shop from "../Pages/Shop";


export default function Routespages() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/Home" element={<Home />} />
         <Route path="/Shop" element={<Shop />} />
      </Routes>
    </Router>
  );
}