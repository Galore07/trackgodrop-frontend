// import React from "react";
import { useState } from "react";
import images from "../assets/Image.js";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="farm">
      <nav className="oil">
        <div>
          <Link to="/">
            <img src={images.image15} alt="img" className="logo" to="/" />
          </Link>
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/">HOME</Link>
          </li>

          <li>
            <Link to="/about">ABOUT US</Link>
          </li>

          <li>
            <Link to="/track">TRACK SHIPMENT</Link>
          </li>

          {/* <li>
            <Link to="/processing">SERVICES</Link>
          </li> */}

          <li>
            <a href="mailto:support@trackgodrop.com?subject=Shipment%20Inquiry">CONTACT</a>
          </li>
        </ul>

        <div className="hamburger-icon" onClick={toggleMenu}>
          <FaBars />
        </div>

        <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <FaTimes className="close-icon" onClick={closeMenu} />
          <ul>
            <li onClick={closeMenu}><Link to="/">HOME</Link></li>
            <li onClick={closeMenu}><Link to="/about">ABOUT US</Link></li>
            <li onClick={closeMenu}><Link to="/track">TRACK SHIPMENT</Link></li>
            <li onClick={closeMenu}><a href="mailto:support@trackgodrop.com?subject=Shipment%20Inquiry">CONTACT</a></li>
          </ul>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
