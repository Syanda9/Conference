import React, { useState } from 'react';
import './Conference.css';
import image1 from '../../assets/pexels.jpg';
import Registration from '../Registration/Registration'

function Conference() {
  const [activeTab, setActiveTab] = useState(null);
  const [activeAgendaDay, setActiveAgendaDay] = useState(null);
  

  const renderContent = () => {
    switch (activeTab) {
      case 'Objectives':
        return <p>Our objectives are to raise awareness about PFAS and discuss mitigation strategies.</p>;
      case 'Agenda':
        return (
          <div style={{background:'lightblue', fontFamily:'Ariel'}}>
            <button onClick={() => setActiveAgendaDay('Day 1')} style={{background:'blue', hover:'lightblue'}} >Day 1</button>&nbsp;
            <button onClick={() => setActiveAgendaDay('Day 2')} style={{background:'blue',}}>Day 2</button>
            {activeAgendaDay === 'Day 1' && 
               <ul style={{fontFamily:'Ariel', fontSize:'1rem', lineHeight:'1.5'}}>
              <p style={{fontSize:'1rem'}}><strong>PFAS Regulatory Landscape and Policy Development</strong></p>
              <p style={{fontSize:'1rem'}}>Global vs. local regulations on PFAS.</p>
              <p style={{fontSize:'1rem'}}>A South African Perspective on PFAS Legislation</p>
              <p style={{fontSize:'1rem'}}>Policy challenges and opportunities for African nations in regulating PFAS.</p>
              <p style={{fontSize:'1rem'}}>Pathways for developing standardized PFAS regulations in Africa.</p>
              <p style={{fontSize:'1rem'}}><strong style={{color:"blue"}}>PANEL DISCUSSION:</strong></p> 
              <p style={{fontSize:'1rem'}}>A Global Perspective Governing PFAS Legislation</p>
              <p style={{fontSize:'1rem'}}><strong style={{color:'blue'}}>PFAS in Industry: Risks, Compliance, and Alternatives</strong></p>
              <p style={{fontSize:'1rem'}}>Key industries contributing to PFAS use and contamination in Africa.</p>
              <p style={{fontSize:'1rem'}}>Industrial PFAS Management & Treatment</p>
              <p style={{fontSize:'1rem'}}>PFAS-free alternatives in manufacturing, firefighting, and textiles</p>
              <p style={{fontSize:'1rem'}}>Corporate responsibility and sustainable business practices</p>
              <p style={{fontSize:'1rem'}}>Unveiling the Costs Associated with PFAS Implementation and Continued Manufacturing</p>
              </ul>
                      }

                
            {activeAgendaDay === 'Day 2' && <p>Day 2 Agenda: Panel Discussions and Closing Remarks.</p>}
          </div>
        );
      case 'Speakers':
        return <p>Meet our speakers: Experts in water safety and PFAS management.</p>;
      case 'Register':
        return null;
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
          <button onClick={() => setActiveTab('Objectives')}>Overview</button>
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



  

