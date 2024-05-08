import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../components/layout/header.jsx";
import Footer from "../components/layout/footer.jsx";
import AboutSection from "../components/pages/sectionAbout.jsx";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/about" element={<AboutSection />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RoutesApp;
