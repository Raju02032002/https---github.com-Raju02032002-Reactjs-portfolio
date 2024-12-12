import React from "react";
import Navbar from "./Navbar"; // Import your Navbar component
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Navbar /> {/* Navbar is always displayed */}
      <div>
        <Outlet /> {/* This renders the child routes (Home, About, etc.) */}
      </div>
    </>
  );
};

export default MainLayout;
