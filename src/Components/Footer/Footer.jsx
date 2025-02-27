import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-scroll';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/shop"></a>
        <a href="/contact-us"><Link to="contact-container"  smooth="true" duration={500} offset={-80}> Contact Us</Link></a>
        <a href="/terms-of-service"><Link to="terms">Terms & Condition</Link></a>
        <a href="/registration"><Link to="content-container" smooth="true" duration={500} offset={-80} >Register</Link></a>
        <a href="/track-order"><Link to="content-container" smooth="true" duration={500} offset={-80}>Conference</Link></a>
      </div>
      <div className="footer-copyright">
        © 2024 . BizStrat. Site Developed By <a href="https://github.com/Syanda9/"> <strong style={{color:"blue", fontFamily:"sans-serif"}}>Pholoba</strong></a>
      </div>
    </footer>
  );
};

export default Footer;