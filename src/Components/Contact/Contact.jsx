import React from "react";
import "./Contact.css";

const ContactForm = () => {
  return (
    <div className="contact-container">
      <div className="subtitle">
        <h1>Contact us</h1>
      </div>

      <div className="content-wrapper">
        {/* Left Information */}
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
            <h2>Pietermaritzburg Office</h2>
            <p>Servigraph 30cc t/a BizStrat</p>
            <p>CC Registration No.: 2011/049644/23</p>
            <p>VAT Registration No.: 4700259502</p>
            <p>8 Legion Road, Scottsville, Pietermaritzburg, 3201</p>
            <p>Tel: +27 87 802 9998 / +27 87 802 9076</p>
            <p>E-Mail: admin@bizstrat.co.za</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="form-container">
          <form className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <input type="text" id="fullName" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="text" id="companyName" placeholder="Company Name" required />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <input type="email" id="businessEmail" placeholder="Business Email" required />
              </div>
              <div className="input-group">
                <input type="tel" id="businessNumber" placeholder="Business Number" required />
              </div>
            </div>
            
            <div className="input-group">
              <select id="interest" required>
                <option value="" disabled selected>
                  Select Your Interest
                </option>
                <option value="sponsorship">Sponsorship</option>
                <option value="inhouse-training">In-House Training</option>
                <option value="speaker">Want to Be a Speaker</option>
                <option value="conference">Conference</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group message-group">
              <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
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




