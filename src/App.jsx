import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import About from "./Components/pages/About";
import Contact from "./Components/pages/Contact";
import Home from "./Components/pages/Home";
import Shop from "./Components/pages/Shop";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Header />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route path="/Shop" element={<Shop />}></Route>

          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default App;
