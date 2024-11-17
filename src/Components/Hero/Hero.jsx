import React, { useState, useEffect } from "react";
import "./Hero.css";
import image1 from "../../assets/pexels.jpg";
import image3 from "../../assets/istockphoto.jpg";

const images = [
  { src: image1, content: "Explore the future of clean water" }, // First image with unique text
  { src: image3, content: "PFAS Conference 2025" }, // Second image
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, []);

  const currentImage = images[currentImageIndex];

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${currentImage.src})`,
      }}
    >
      <div className="hero-content">
        {currentImageIndex === 0 ? (
          <h1 className="hero-title hero-left">{currentImage.content}</h1> // Large text on the left
        ) : (
          <>
            <h1 className="hero-title">{currentImage.content}</h1> 
            <p id="FO">FOREVER CHEMICALS</p>
            <br/>
            <button className="hero-button">Register Now</button>
          </>
        )}
      </div>
    </section>
  );
};

export default Hero;


