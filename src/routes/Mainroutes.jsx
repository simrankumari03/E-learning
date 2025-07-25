// MainRoutes.js
import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your pages
import Home from "../pages/Home";
import About from "../pages/About";
import Course from "../pages/course"; // Make sure the filename is 'Course.js' with capital 'C'
import Contact from "../pages/course";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/course" element={<Course />} />
      <Route path="/contact" element={<Contact />} />
      {/* Optional: 404 Not Found Route */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
};

export default MainRoutes;
