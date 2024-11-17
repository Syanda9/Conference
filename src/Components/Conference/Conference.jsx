import React, { useState } from 'react';
import './Conference.css';
import image1 from '../../assets/pexels.jpg';

function Conference() {
  const [activeTab, setActiveTab] = useState(null);
  const [activeAgendaDay, setActiveAgendaDay] = useState(null);

  const renderContent = () => {
    switch (activeTab) {
      case 'Objectives':
        return <p>Our objectives are to raise awareness about PFAS and discuss mitigation strategies.</p>;
      case 'Agenda':
        return (
          <div>
            <button onClick={() => setActiveAgendaDay('Day 1')}>Day 1</button>
            <button onClick={() => setActiveAgendaDay('Day 2')}>Day 2</button>
            {activeAgendaDay === 'Day 1' && <p>Day 1 Agenda: Keynote, Workshops, and Networking.</p>}
            {activeAgendaDay === 'Day 2' && <p>Day 2 Agenda: Panel Discussions and Closing Remarks.</p>}
          </div>
        );
      case 'Speakers':
        return <p>Meet our speakers: Experts in water safety and PFAS management.</p>;
      case 'Register':
        return <p>Register now to secure your spot at the conference!</p>;
      default:
        return null;
    }
  };

  return (
    <div className="conference">
      <div className="conference-text">
        <h1>PFAS (Forever Chemicals)</h1>
        <p>
          <strong id='CO'>CONFERENCE 2025</strong><br />
          AN AFRICAN PERSPECTIVE
        </p>
        <div className="event-info">
          <p>INDABA CONFERENCE CENTRE</p>
          <p>FOURWAYS, SANDTON</p>
          <p><strong>Date:</strong> 27-28 February 2025</p>
          <p><strong>Location:</strong> Johannesburg</p>
        </div>
        <div className="buttons">
          <button onClick={() => setActiveTab('Objectives')}>Objectives</button>
          <button onClick={() => setActiveTab('Agenda')}>Agenda</button>
          <button onClick={() => setActiveTab('Speakers')}>Speakers</button>
          <button onClick={() => setActiveTab('Register')}>Register</button>
          <button onClick={() => { setActiveTab(null); setActiveAgendaDay(null); }}>Close</button>
        </div>
        <div className="content">
          {renderContent()}
        </div>
      </div>
      <div className="conference-image">
        <img src={image1} alt="Conference" />
      </div>
    </div>
  );
}

export default Conference;



  

