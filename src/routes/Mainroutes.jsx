
import React from "react";
import { Routes, Route } from "react-router-dom";


import Home from "../pages/Home";
import About from "../pages/About";
import Course from "../pages/course"; 
import Contact from "../pages/contact";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/course" element={<Course />} />
      <Route path="/contact" element={<Contact />} />
      
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
