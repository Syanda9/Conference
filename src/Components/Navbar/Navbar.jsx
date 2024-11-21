import React, { useState } from "react";
import "./Navbar.css";
import image1 from '../../assets/Picture1.jpg'
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-container">
       
        <img src={image1} alt='' />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`right-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to="/" smooth="true" duration={500} ><button className="bu" > Home </button></Link></li>
          <li className="nav-item"><Link to="conference"  smooth="true" duration={500} ><button className="bu" >Conference</button></Link></li>
          <li className="nav-item"><Link to="contact" smooth="true" duration={500} offset={-70} ><button className="bu">Contact</button></Link></li>
          <li className="nav-item"><Link to="registration" smooth="true" duration={500} offset={-150} ><button className="bu">Register</button></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
