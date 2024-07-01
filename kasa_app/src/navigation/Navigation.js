import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import AboutUs from "../pages/about-us/AboutUs";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Logement from "../pages/logement/Logement";
import Error404 from "../pages/error-404/Error404";

const Navigation = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        <Route exact path="/logement/:id" element={<Logement />} />
        <Route exact path="*" element={<Error404/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Navigation;
