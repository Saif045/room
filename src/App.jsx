import React, { Component } from "react";

import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import Shop from "./Components/pages/Shop";

import Header from "./Components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />}>
          
        </Route>

        <Route path="/about" element={<About />}>
       
        </Route>

        <Route path="/Shop" element={<Shop />}>
   
        </Route>

        <Route path="/contact" element={<Contact />}>
  
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
