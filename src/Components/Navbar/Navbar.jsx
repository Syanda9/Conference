import React, { useState } from "react";
import "./Navbar.css";
import image1 from '../../assets/Picture1.jpg'
import {Link} from 'react-scroll';

const Navbar = ({setView}) => {
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
          <li className="nav-item"><Link to="hero" smooth="true" duration={500} ><button className="bu" onClick={()=>setView('home')}> Home </button></Link></li>
          <li className="nav-item"><Link to="conference"  smooth="true" duration={500} ><button className="bu" onClick={()=>setView('conference')}>Conference</button></Link></li>
          <li className="nav-item"><Link to="header" smooth="true" duration={500} offset={-70} ><button className="bu" onClick={()=> setView('contact')}>Contact</button></Link></li>
          <li className="nav-item"><Link to="registration-form" smooth="true" duration={500} offset={-150} ><button className="bu" onClick={()=> setView('registration')}>Register</button></Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
