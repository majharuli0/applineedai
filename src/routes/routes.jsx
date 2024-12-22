import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Industries from "../pages/Industries";
import Layout from "../layout/layout";
import Services from "../pages/Services";
import VisionAI from "../pages/VisionAI";
import Api from "../pages/API";
import ContactUs from "../pages/ContactUs";
const RoutesConfig = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/services" element={<Services />} />
          <Route path="/vision-ai" element={<VisionAI />} />
          <Route path="/api" element={<Api />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default RoutesConfig;
