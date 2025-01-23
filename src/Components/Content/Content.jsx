import React, { Component } from 'react';
import './Content.css';
import RegistrationForms from '../Registration/Registration';
import Speakers from '../Speaker/Speaker';
import SponsorshipPackages from '../Sponsor/Sponsor';
import image1 from '../../assets/istockphoto-PFAS.jpg'

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'Overview', // Default active tab
      activeAgendaTab: 'Day 1', // Default active agenda day
    };
  }

  // Method to change active tab
  handleTabChange = (tab) => {
    this.setState({ activeTab: tab });
  };

  // Method to change agenda day
  handleAgendaTabChange = (day) => {
    this.setState({ activeAgendaTab: day });
  };

  render() {
    const { activeTab, activeAgendaTab } = this.state;

    // Agenda content for each day
    const agendaContent = {
      'Day 1': (
        <div style={{lineHeight:'45px'}}>
          <h3>Day 1 Agenda</h3>
          
            <p>07:30-08:30: Registration, Early Morning Tea, Coffee</p>
            <p>08:30: Opening & Welcome, Address by Chair</p>
            <p>08:35: Opening Address: TBC</p>
            <p>09:05: Keynote Address: PFAS Research in Africa</p>
            <strong><p style={{color:"blue"}}>Stream 1: PFAS Regulatory Landscape and Policy Development</p></strong>
            <p>09:35: Global Regulatory & Legislative Landscapes: US, EU & Great Britain</p>
            <strong><p>10:00: Refreshment Break</p></strong>
            <p>10:30: Global vs. Local Regulations on PFAS</p>
            <p><span style={{color:'blue'}}>11:00: Panel Discussion:</span> Pathways for Developing Standardized PFAS Regulations in Africa</p>
            <strong><p style={{color:'blue'}} >Stream 2: PFAS in Industry: Risks, Compliance, and Alternatives</p></strong>
            <p>12:00: Key Industries Contributing to PFAS Use and Contamination in Africa</p>
            <p>12:30: Industrial PFAS Management & Treatment</p>
            <strong><p>13:00: Lunch & Networking</p></strong>
            <p>14:00: PFAS-Free Alternatives in Manufacturing, Firefighting, and Textiles</p>
            <p>14:30: Corporate Responsibility and Sustainable Business Practices</p>
            <p>15:00: Teas & Networking</p>
            <p><span style={{color:'blue'}}>15:15: Panel Discussion:</span> The Regulation of PFAS-Containing Products That Are Imported</p>
            <p>16:00: Risk Mitigation - Value Chain and Manufacturing Impacts</p>
            <strong><p>16:30: Closing Remarks by Chair and End of Day 1</p></strong>
        </div>
      ),
      'Day 2': (
        <div style={{lineHeight:'45px'}}>
          <h3>Day 2 Agenda</h3>
          
            <p>07:30-08:30: Registration, Early Morning Tea, Coffee</p>
            <p>08:30: Welcome Back Remarks by Chair</p>
            <p>08:35:<span style={{color:'blue'}}>Keynote Address:</span> PFAS in Drinking Water and Food Sources</p>
            <p>09:00: Contamination Pathways in Water Systems & Food Sources</p>
            <p>09:30: Case Studies on PFAS Levels in Drinking Water and Food Across African Regions</p>
            <strong><p >10:00: Refreshment Break</p></strong>
            <p>10:30: Innovations in Water Purification and Food Safety Regarding PFAS</p>
            <p><span style={{color:'blue'}}>11:00: Case Study:</span> City of Cape Town - Reuse from Faure New Water Scheme & PFAS Management</p>
            <p>11:45: <span style={{color:'blue'}}>Panel Discussion: </span>A Comprehensive Review of the Occurrence, Distribution, Characteristics and Fate of PFAS in the African Continent</p>
            <strong><p>12:30: Lunch & Networking</p></strong>
            <p style={{color:'blue'}}>13:30: Health Impacts of PFAS Exposure</p>
            <ul style={{marginLeft:'30px'}}>
              <li>Health risks associated with PFAS, including cancer, immune system impacts, and hormonal disruption.</li>
              <li>Vulnerable populations in Africa and health equity concerns.</li>
              <li>Risk assessment and exposure limits for PFAS in African contexts.</li>
              <li>Reducing Harm from PFAS: Research, Policy, & Persistence.</li>
            </ul>
           <p><strong>14:00: Panel Discussion: </strong> Water Crisis and PFAS Relevance</p>
            <strong><p>15:00: Closing Remarks by Chair and End of Conference</p></strong>
        </div>
      ),
    };

    // Content for each main tab
    const content = {
      Overview: (
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
         <div style={{ flex: 1.5, lineHeight:'25px' }}>
          <h2></h2>
          <p style={{lineHeight:'25px'}}>
        <strong>PFAS, (per- fluoroalkyl and poly-fluoroalkyl substances)</strong>, often dubbed <strong>"Forever Chemicals"</strong> due to their persistence in the environment and potential health risks, have been a subject of increasing concern in recent years. PFAS, (per- fluoroalkyl and poly-fluoroalkyl substances), often dubbed "Forever Chemicals" due to their persistence in the environment and potential health risks, have been a subject of increasing concern in recent years. </p><br/>
         <p> PFAS are a broad set of chemicals renowned for their unique properties and used in many consumer and industrial applications. PFAS spark global concerns as they can persist and build up in the environment, human bodies and food chains. </p><br/>
         <p> PFAS (per- fluoroalkyl and poly-fluoroalkyl substances) are a group of man- made chemicals used globally for many purposes. </p><br/>
         <p> While some PFAS substances have been the target of regulators over the past decade, the focus on these chemicals generally has recently intensified because of data that indicates that they do not biodegrade in the natural environment. </p><br/>
        <p>BizStrat’s Inaugural PFAS (Forever Chemicals), An African Perspective, Conference 2025, will address the local landscape of proposed Legislation, risk management & Research, surrounding PFAS & the Environment, safer alternatives as well as Global perspectives pertaining to FPAS usage in all industry sectors over the 2 days. 
          </p><br/>
          <p><strong>Key Messages:</strong> </p>
              
              <ul style={{marginLeft:'3%'}}>
                <li>PFAS persist in the environment and human body, linked to serious health conditions like cancer and endocrine disruption.</li>
                <li>Actions can limit exposure, such as using PFAS-free products and advocating for policy change.</li>
                <li>Importance of continued research and monitoring in Africa to understand PFAS sources and impacts.</li>
              </ul>
            
              <br/>
              <p><strong>Objectives:</strong></p>
              <ul style={{marginLeft:'3%'}}>
                <li>Educate public and authorities on PFAS health risks and environmental impacts.</li>
                <li>Encourage sustainable practices and adoption of PFAS-free products.</li>
                <li>Support regulatory frameworks to limit PFAS usage and contamination.</li>
                <li>Promote further research and monitoring efforts within Africa.</li>
              </ul>
        </div>
        <div style={{ flex: 1, textAlign: 'right', marginLeft: '20px' }} className='IMAGE'>
        <img
          src={image1}
          alt="PFAS Conference Overview"
          style={{ width: '100%', maxWidth: '300px', borderRadius: '10px', height:'430px', marginRight: '40px' }}
        />
      </div>
    </div>
      ),
      Agenda: (
        <div>
          <div className="agenda-tabs">
            {['Day 1', 'Day 2'].map((day) => (
              <button
                key={day}
                className={activeAgendaTab === day ? 'active-tab' : ''}
                onClick={() => this.handleAgendaTabChange(day)}
              >
                {day}
              </button>
            ))}
          </div>
          <div className="agenda-content">{agendaContent[activeAgendaTab]}</div>
        </div>
      ),
      Speakers: <Speakers/>,
      Register: <RegistrationForms />,
      Sponsor: <SponsorshipPackages />,
    };

    return (
      <div className="content-container">
        <div className="header">
          <h1>PFAS (Forever Chemicals) HYBRID Conference 2025</h1>
        </div>
        <div className="details">
          <p>27-28 Feb 2025</p>
          <br />
          <p>Indaba Hotel, Fourways</p>
          <p>Sandton, JHB.</p>
          <br />
          <p>+27 87 802 9998</p>
          <p>admin@bizstrat.co.za</p>
        </div>
        <div className="tabs">
          {['Overview', 'Agenda', 'Speakers', 'Register', 'Sponsor'].map((tab) => (
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


