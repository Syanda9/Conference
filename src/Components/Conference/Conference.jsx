import React from 'react';
import './Conference.css';
import image1 from '../../assets/pexels.jpg'

const Conference = ({ onMoreInfo }) => {
  return (
    <div className="conference">
      <div className="conference-text">
        <h1>
          PFAS (Forever Chemicals) HYBRID CONFERENCE 2025
          <br />
          <span id="AN">AN AFRICAN PERSPECTIVE</span>
        </h1>
        <p></p>
        <div className="event-info">
          <p>INDABA CONFERENCE CENTRE</p>
          <p>FOURWAYS, SANDTON</p>
          <p>
            <strong>Date:</strong> 27-28 February 2025
          </p>
          <p>
            <strong>Location:</strong> Johannesburg
          </p>
        </div>
        <button className="upcoming-events" onClick={onMoreInfo}>
          More Info
        </button>
      </div>
    </div>
  );
};

export default Conference;



  

