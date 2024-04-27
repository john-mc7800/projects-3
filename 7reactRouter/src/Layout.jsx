import React from "react";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Home />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
