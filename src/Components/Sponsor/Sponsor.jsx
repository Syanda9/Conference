import React from "react";

const SponsorshipPackages = () => {
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
    <div style={{ backgroundColor: "#007BFF", color: "#fff", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      {/* Main Heading */}
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "36px", fontWeight: "bold", marginBottom: "10px" }}>Sponsors</h1>
        <p style={{ fontSize: "18px", lineHeight: "1.5", maxWidth: "600px", margin: "0 auto" }}>
        Partnering with us as a sponsor offers unmatched opportunities to connect with your target audience. 
        Showcase your brand and expand your reach through our tailored sponsorship packages.
        </p>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#FFC107",
            color: "#000",
            fontWeight: "bold",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Become a Sponsor
        </button>
      </div>

      {/* Subheader */}
      <h2 style={{ textAlign: "left", fontSize: "28px", marginTop: "40px", marginBottom: "20px", color:"white" }}>
        Sponsorship and Exhibition Benefits
      </h2>

      {/* Sponsorship Cards */}
      <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
        {packages.map((pkg, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              width: "300px",
              padding: "15px",
              backgroundColor: "#fff",
              color: "#000",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontWeight: "bold", margin: "10px 0", fontSize: "18px" }}>{pkg.title}</h3>
            <ul style={{ textAlign: "left", paddingLeft: "20px" }}>
              {pkg.benefits.map((benefit, idx) => (
                <li key={idx} style={{ marginBottom: "8px" }}>
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SponsorshipPackages;




