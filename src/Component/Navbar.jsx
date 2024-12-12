import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import image from './images/rk-removebg-preview.png';

const Navbar = () => {
  return (
    <div id="maindiv">
      {/* Navbar Section */}
      <div id="box1">
        <div id="style">
          <img src={image} alt="Logo" height="70px" width="200px" />
        </div>
        <div id="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/skills">Skills</Link>
          <Link to="/project">Project</Link>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>

      {/* This is where child route content will be displayed */}
      <aside>
        <Outlet />
      </aside>
    </div>
  );
};

export default Navbar;
