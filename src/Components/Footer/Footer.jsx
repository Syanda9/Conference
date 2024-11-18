import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="/shop"></a>
        <a href="/contact-us"><Link to="header"  smooth="true" duration={500} offset={-90}> Contact Us</Link></a>
        <a href="/privacy-policy">Privacy Policy</a>
        <a href="/terms-of-service">Terms & Condition</a>
        <a href="/refund-policy">Refund Policy</a>
        <a href="/shipping-policy">Register</a>
        <a href="/faq">FAQ</a>
        <a href="/track-order"><Link to="conference" smooth="true" duration={500}>Conference</Link></a>
      </div>
      <div className="footer-copyright">
        © 2024 . BizStrat. Site Designed By Pholoba
      </div>
    </footer>
  );
};

export default Footer;