import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Layout = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      <main className="pt-8">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
