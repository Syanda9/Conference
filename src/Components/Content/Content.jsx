import React, { Component } from 'react';
import './Content.css';
import RegistrationForms from '../Registration/Registration';
import Speakers from '../Speaker/Speaker';

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
      Overview: <p>Here are the objectives of the conference.</p>,
      Agenda: <p>Here is the agenda for the conference.</p>,
      Speakers: <Speakers/>,
      Register: <RegistrationForms/>,
    };

    return (
      <div className="content-container">
        <div className="header">
          <h1>PFAS (Forever Chemicals) Conference 2025</h1>
        </div>
        <div className="details">
          <p>Date: 28-27 Feb 2025</p>
          <p>Address: Indaba Hotel, Fourways, Sandton</p>
          <p>City: Johannesburg</p>
          <p>For More Info Contact:</p>
          <p>Tel: 0878028776</p>
          <p>Email: admin@bizstrat.co.za</p>
        </div>
        <div className="tabs">
          {['Overview', 'Agenda', 'Speakers', 'Register'].map((tab) => (
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
