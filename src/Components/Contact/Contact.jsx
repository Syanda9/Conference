import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="contact-info">
        <div className="office-info">
          <h2>Head Office</h2>
          <p>Servigraph 30cc t/a BizStrat</p>
          <p>CC Registration No.: 2011/049644/23</p>
          <p>VAT Registration No.: 4700259502</p>
          <p>Sandtonview Office Park, Block D, Unit 48, Conduit St. Lyme Park, 2196</p>
          <p>Tel: +27 87 802 9998 / +27 87 802 9076</p>
          <p>E-Mail: admin@bizstrat.co.za</p>
        </div>
        <div className="office-info">
          <h2>Satellite Office</h2>
          <p>Servigraph 30cc t/a BizStrat</p>
          <p>CC Registration No.: 2011/049644/23</p>
          <p>VAT Registration No.: 4700259502</p>
          <p>8 Legion Road, Scottsville, Pietermaritzburg, 3201</p>
          <p>Tel: +27 87 802 9998 / +27 87 802 9076</p>
          <p>E-Mail: admin@bizstrat.co.za</p>
        </div>
      </div>
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
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;


