import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/shop"></a>
        <a href="/contact-us"><Link to="contact"  smooth="true" duration={500} offset={-90}> Contact Us</Link></a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms & Condition</a>
        <a href="/registration"><Link to="registration" >Register</Link></a>
        <a href="/track-order"><Link to="conference" smooth="true" duration={500}>Conference</Link></a>
      </div>
      <div className="footer-copyright">
        © 2024 . BizStrat. Site Developed By <a href="https://github.com/Syanda9/"> <strong style={{color:"blue", fontFamily:"sans-serif"}}>Pholoba</strong></a>
      </div>
    </footer>
  );
};

export default Footer;