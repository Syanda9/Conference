import React from 'react';
import './Conference.css';
import image1 from '../../assets/pexels.jpg'

const Conference =({onMoreInfo}) => {
  return (
    <div className="conference">
      <div className="conference-text">
        <h1>PFAS (Forver Chemicals)</h1>
        <p>
          <strong id='CO'>CONFERENCE 2025</strong><br/>
          AN AFRICAN PERSPECTIVE
        </p>
        <div className="event-info">
          <p>INDABA CONFERENCE CENTRE</p>
          <p>FOURWAYS, SANDTON</p>
          <p><strong>Date:</strong> 27-28 February 2025</p>
          <p><strong>Location:</strong> Johannesburg</p>
        </div>
        <button className="upcoming-events"  onClick={onMoreInfo}>More Info</button>
      </div>
      <div className="conference-image">
        <img src={image1} alt="Conference" />
      </div>
    </div>
  );
}

export default Conference;



  

