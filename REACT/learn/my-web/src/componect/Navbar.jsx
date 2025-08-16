import React from "react";
import logo from "./download.svg"; 
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className="nav-main">
      <ul>
        <li><img src={logo} alt="React Logo" style={{ width: "50px", }} /></li>
        <li><a href="#" className="link" >v19.1</a></li>
        <li><input type="search" className="search" placeholder="Search"/></li>
        <li className="Nav-items">Learn</li>
        <li className="Nav-items">Reference</li>
        <li className="Nav-items">Community</li>
        <li className="Nav-items">Blog</li>
      </ul>
    </div>
  );
};

export default NavBar;
