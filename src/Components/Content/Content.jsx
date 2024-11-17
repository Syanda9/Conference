import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Objectives', // Default active tab
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
      Objectives: <p>Here are the objectives of the conference.</p>,
      Agenda: <p>Here is the agenda for the conference.</p>,
      Speakers: <p>Here is the list of speakers for the conference.</p>,
      Register: <p>Here is how you can register for the conference.</p>,
    };

    return (
      <div className="content-container">
        <div className="header">
          <h1>PFAS Conference</h1>
          <h2>Forever Chemicals</h2>
        </div>
        <div className="details">
          <p>Date: [Insert Date Here]</p>
          <p>Address: [Insert Address Here]</p>
          <p>City: [Insert City Here]</p>
          <p>For More Info Contact:</p>
          <p>Tel: [Insert Telephone Number Here]</p>
          <p>Email: [Insert Email Here]</p>
        </div>
        <div className="tabs">
          {['Objectives', 'Agenda', 'Speakers', 'Register'].map((tab) => (
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
