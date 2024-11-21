import React, { Component } from 'react';
import './Content.css';
import RegistrationForms from '../Registration/Registration';
import Speakers from '../Speaker/Speaker';
import SponsorshipPackages from '../Sponsor/Sponsor';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Overview', // Default active tab
    };
  }

  // Method to change active tab
  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const { activeTab } = this.state;

    // Content for each tab
    const content = {
      Overview: <p></p>,
      Agenda: <p></p>,
      Speakers: <p>/</p>,
      Register: <RegistrationForms/>,
      Sponsor: <SponsorshipPackages/>,
    };

    return (
      <div className="content-container">
        <div className="header">
          <h1>PFAS (Forever Chemicals) HYBRID Conference 2025</h1>
        </div>
        <div className="details">
          <p>28-27 Feb 2025</p>
          <br/>
          <p>Indaba Hotel,Fourways</p>
          <p>Sandton, JHB.</p>
           <br/>
          <p>+27 87 802 9998</p>
          <p>admin@bizstrat.co.za</p>
        </div>
        <div className="tabs">
          {['Overview', 'Agenda', 'Speakers', 'Register','Sponsor'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active-tab' : ''}
              onClick={() => this.handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="tab-content">{content[activeTab]}</div>
      </div>
    );
  }
}

export default Content;
