import React from "react";
import { Link } from "react-router-dom";
// import { IoFastFoodOutline } from "react-icons/io";
import { MdOutlineFastfood } from "react-icons/md";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <header>
        <nav className="navbar">
          <div className="navbar__container">
            <Link to="/">
              <MdOutlineFastfood />
            </Link>

            <ul>
              <li>Home</li>
              <li>Features</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
