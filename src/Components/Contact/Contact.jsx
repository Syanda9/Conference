import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div className="header">
     <div className="subtitle">
      <h1>Contact us</h1>
     </div>
    
    <div className="form-container">
      <form className="contact-form">
        <div className="form-row">
          <div className="input-group">
            <input type="text" id="fullName" required />
            <label htmlFor="fullName">Full Name</label>
          </div>
          <div className="input-group">
            <input type="text" id="companyName" required />
            <label htmlFor="companyName">Company Name</label>
          </div>
        </div>
        <div className="form-row">
          <div className="input-group">
            <input type="email" id="businessEmail" required />
            <label htmlFor="businessEmail">Business Email</label>
          </div>
          <div className="input-group">
            <input type="tel" id="businessNumber" required />
            <label htmlFor="businessNumber">Business Number</label>
          </div>
        </div>
        <div className="input-group message-group">
          <textarea id="message" rows="5" required></textarea>
          <label htmlFor="message">Your Message</label>
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactForm;
