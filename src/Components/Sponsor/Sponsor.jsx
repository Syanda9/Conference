import React from "react";
import "./Sponsor.css";
import { useNavigate } from "react-router-dom";

const Sponsor = () => {
  const navigate = useNavigate(); // Hook for programmatic navigation

  const handleMoreInfo = () => {
    navigate('contact');
  }
  const packages = [
    {
      title: "Platinum Sponsor",
      benefits: [
        "Chair the event",
        "Prime exhibition space",
        "Host Luncheon with a 15-minute welcoming address",
        "Branding within conference venue",
        "45-minute case study presentation",
        "Full-color logo on marketing material",
        "3 complimentary seats for the conference",
        "Delegate list provided",
        "Distribute up to 10 pages of literature",
        "30-minute lead address focused on market-related issues",
        "Wish list of companies to attend",
        "50% discounted rate for sponsoring company participants",
        "100 words of promotional text on the brochure",
        "Full conference report and feedback",
      ],
    },
    {
      title: "Gold Sponsor",
      benefits: [
        "Prime exhibition space",
        "Host a workshop with a 5-minute introduction",
        "Branding within the conference venue",
        "40-minute case study presentation",
        "2 complimentary seats for the event",
        "Full-color logo on marketing material",
        "Distribute up to 10 pages of literature",
        "Wish list of companies to attend",
        "30% discounted rate for sponsoring company participants",
        "70 words of promotional text on the brochure",
        "Full conference/workshop report and feedback",
      ],
    },
    {
      title: "Silver Sponsor",
      benefits: [
        "Large banner at the venue and networking area (provided by the client)",
        "Full-color logo on marketing material",
        "Distribute up to 10 pages of literature",
        "Wish list of companies to attend",
        "20% discounted rate for sponsoring company participants",
        "Present a half-day workshop",
        "50 words of promotional text on the brochure",
        "1 complimentary seat for the event",
      ],
    },
  ];

  return (
    <div className="sponsor-container">
      {/* Main Heading */}
      <div className="sponsor-header">
        <h1>Sponsors</h1>
        <p>
        Partnering with us as a sponsor offers unmatched opportunities to connect with your target audience. 
        Showcase your brand and expand your reach through our tailored sponsorship packages.
        </p>
        <button className="sponsor-button" onClick={handleMoreInfo}>Become a Sponsor</button>
      </div>

      {/* Subheader */}
      <h2 className="sponsor-subheader">Sponsorship and Benefits</h2>

      {/* Sponsorship Cards */}
      <div className="sponsor-cards">
        {packages.map((pkg, index) => (
          <div key={index} className="sponsor-card">
            <h3>{pkg.title}</h3>
            <ul>
              {pkg.benefits.map((benefit, idx) => (
                <li key={idx}>{benefit}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Sponsor;





