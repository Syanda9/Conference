import React, { useState } from "react";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    interest: "", // Used as the subject of the email
    message: "",
  });

  const [status, setStatus] = useState("idle"); // idle, submitting

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting"); // Set status to submitting

    // Convert the formData object to URL-encoded format for PHP backend
    const formBody = Object.keys(formData)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(formData[key]))
      .join('&');

    try {
      const response = await fetch("https://pfas-africa.bizstrat.co.za/backend/contact.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formBody,
      });

      if (response.ok) {
        setStatus("idle"); // Reset status
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
          interest: "", // Reset interest
          message: "",
        });
        alert("Message sent successfully!"); // Success alert
      } else {
        setStatus("idle"); // Reset status
        alert("Failed to send the message. Please try again."); // Error alert
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("idle"); // Reset status
      alert("Failed to send the message. Please try again."); // Error alert
    }
  };

  return (
    <div className="contact-container">
      <div className="subtitle">
        <h1>Contact us</h1>
      </div>

      <div className="content-wrapper">
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
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-row">
              <div className="input-group">
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  value={formData.companyName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="form-row">
              <div className="input-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Business Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Business Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className="input-group">
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
              >
                <option value="" disabled>Select Your Interest</option>
                <option value="sponsorship">Sponsorship</option>
                <option value="inhouse-training">In-House Training</option>
                <option value="speaker">Want to Be a Speaker</option>
                <option value="conference">Conference</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="input-group message-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-button" disabled={status === "submitting"}>
              {status === "submitting" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;









