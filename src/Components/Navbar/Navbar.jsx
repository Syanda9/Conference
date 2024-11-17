import React, { useState } from "react";
import "./Navbar.css";
import image1 from '../../assets/Picture1.jpg'
import {Link} from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="left-container">
        <h1 className="title">PFAS CONFERENCE</h1>
       
        <img src={image1} alt='' />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <div className={`right-container ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-list">
          <li className="nav-item"><Link to="hero" smooth="true" duration={500} >Home</Link></li>
          <li><Link  to="About" smooth="true" duration={500} offset={-98}>Overview</Link></li>
          <li className="nav-item"><Link to="conference"  smooth="true" duration={500} >Conference</Link></li>
          <li className="nav-item"><Link to="header" smooth="true" duration={500} offset={-70} >Contact</Link></li>
          <li className="nav-item"> Register</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
