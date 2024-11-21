import React from 'react';
import './Explore.css';
import image1 from '../../assets/minewater.jpeg'
import image2 from '../../assets/quality.jpeg'
import image3 from '../../assets/waste3.jpeg' 

class Explore extends React.Component {
  render() {
    return (
      <div className="explore-container">
        <header className="explore-header">
          <h1 className="header-title">
          <span className="highlight">BizStrat</span>
          </h1>
          <h2 className="sub-header">Upcoming Events</h2>
        </header>

        <div className="cards-container">
          <div className="card">
            <img
              src={image1}
              alt="Event 1"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-topic">Integrated Mine Water</h3>
              <p className="card-date">Date: Feb 14-15, 2025</p>
              <p className="card-location">Location: Johannesburg</p>
            </div>
          </div>

          <div className="card">
            <img
              src={image2}
              alt="Event 2"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-topic">Water Quality</h3>
              <p className="card-date">Date: Jan 11-12, 2025</p>
              <p className="card-location">Location: Johannesburg</p>
            </div>
          </div>

          <div className="card">
            <img
              src={image3}
              alt="Event 3"
              className="card-image"
            />
            <div className="card-content">
              <h3 className="card-topic">Waste Water </h3>
              <p className="card-date">Date: Jan 30-31 , 2025</p>
              <p className="card-location">Location: Johannesburg</p>
            </div>
          </div>
        </div>

        <div className="learn-more-container">
        <button className="learn-more-btn"><a href="https://www.bizstrat.co.za" target="blank" ref="noopener noreferrer">Learn More</a></button>
        </div>
      </div>
    );
  }
}

export default Explore;
