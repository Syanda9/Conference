{/*import React, { Component } from 'react';
import './Content.css';
import { scroller } from 'react-scroll';
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
        <div style={{lineHeight:'20px', fontWeight:'500px'}}>
          <h3>Day 1 Agenda</h3>
            <p>07:30-08:30: Registration, Early Morning Tea, Coffee</p><br/> 
            <p>08:30: Opening & Welcome</p>
            <p style={{marginLeft:'30px', color:'blue'}}> Address by Chair: Benoit Le Roy</p>
            <br/><p>08:40: Opening Address: Prof Okechukwu Jonathan Okonkwo, Emeritus 
            Professor, Environmental Chemistry, TUT, Pretoria</p>
            <br/><p>09:10: Keynote Address: <span stytle={{color:'blue'}}>Reserved for DWS</span></p>
           <br/><p style={{color:"blue"}}>09:45 PFAS Regulatory Landscape and Policy Development</p>
            <li style={{marginLeft:'30px'}}>Global vs. Local Regulations on PFAS</li>
            <p style={{color:'blue',marginLeft:'30px'}}>Velesia Lesch, Environmental Scientist, Greenfield Sustainable Group </p>
            <br/><strong><p>10:30: Refreshment Break</p></strong> 
           
            <br/><p style={{color:'blue'}}>10:50 Introduction to PFAS and why they are an issue</p>
            <p style={{marginLeft:'28px'}}>PFAS are not like a collection of traditional samples</p>
            <ul style={{marginLeft:'46px'}}>
            <li>Requirements for close collaboration between client, consultant and lab.</li>
            <li>Potential for sample cross contamination</li>
            <li>Procedure</li>
            <li>Sources of PFAS</li>
            <li>PFAS in air (stack emission and ambient air)</li>
            <li>PFAS in water, soil and sediment</li>
            </ul>
            <p style={{color:'blue', marginLeft:'26px'}}>Bryan Taylor: SGS, Industries & Environment, GBDM - Field & Monitoring</p>
           <br/><p>11:35 Tracing PFAS from sewage to sea.</p>
            <ul style={{marginLeft:'46px'}}>
            <li>Per- and polyfluoroalkyl substances (PFASs), which have their origins in both industrial processes and consumer products, 
              can be detected at all treatment stages in wastewater treatment plants (WWTPs).</li>
            <li> Quantifying the emissions of PFAS from WWTPs into the marine environment is crucial because of their potential impacts on receiving aquatic ecosystems. </li>
            </ul>
            <p style={{color:'blue', marginLeft:'26px'}}>Professor Leslie Petrik, Emeritus Professor, Department of Chemistry, University of the Western Cape (UWC), Bellville, Cape Town, South Africa</p>
            <br/><p style={{color:'blue'}}>12:15 PFAS: The useful recalcitrant Chemicals</p>
            <p style={{marginLeft:'28px'}}>Per- and/or polyfluoroalkyl substances were discovered in the 1930s 
and are either fully (per) or partially (poly) fluorinate chemicals. They 
are chemically and thermally stable, hydrophobic and lipophobic, 
water and stain resistant. To date, they are most used in surface 
treatment applications to repel oil, water and stains more effectively 
and, therefore, used widely in cosmetics, carpet cleaning products, 
food packaging, non-tick cookware, firefighting foams and others. 
Because of their strong C–F bond, PFASs are extremely strong, 
resistant to degradation, bio-accumulative and toxic. PFASs 
exposure routes include, contaminated water, soil and vegetation, 
indoor/outdoor pollution, consumer products and occupational 
exposure. PFASs have been linked to kidney and testicular cancer, 
liver enzymes, high cholesterol, low antibody response and others.</p>
<p style={{color:'blue', marginLeft:'26px'}}>Prof Okechukwu Jonathan Okonkwo, Emeritus Professor, 
Environmental Chemistry, TUT, Pretoria</p>
           <br/><strong><p>13:00: Lunch & Networking</p></strong>

           <br/><p>14:00:  To measure is to know — and how do we start monitoring PFAS</p>
           Although PFAS has been regulated in the USA and other countries are rapidly following suit, South Africa lags behind in terms of monitoring and regulating PFAS in water. 
           This presentation will discuss the current and future legislation in terms of drinking water wastewater and environmental quality as well as a discussion on laboratory capacity, 
           in South Africa in terms of measuring organics like PFAS.
           
           <br/> <p></p> Leanne Coetzee, Specialist Consultant, Water Lab 
           
           <br/><p >14:35  PFAS in Drinking Water and Food Sources 
           PFAS bioremediation involves the use of biological organisms, such as plants and microorganisms, to degrade or remove per- and poly-fluoroalkyl substances from contaminated environments. Given the chemical stability and persistence of PFAS, conventional remediation techniques often fall short in effectively addressing these pollutants. Recent studies have shown that specific fungi, like Phanerochaete chrysosporium, can degrade certain PFAS through fragmentation pathways.  contaminants, has shown potential in PFAS removal. 
           </p>
           <br/><p></p>Dr Mariana Erasmus, Acting Director: Centre for Mineral Biogeochemistry, UFS 
           
           <br/><p style={{color:'blue', fontWeight:'bold'}}>15:15: Teas & Networking</p>

           <br/><p >15:30:  PFAS in Industry: Risks, Compliance, and Alternatives: </p>
            <p style={{marginLeft:'28px'}}>• Key industries contributing to PFAS use and contamination in Africa. </p>
            <p style={{marginLeft:'28px'}}> • Industrial PFAS Management & Treatment 16:</p>
          
           <br/><strong><p style={{color:'blue'}}>16:15: Closing Remarks by Chair and End of Day 1</p></strong>
        </div>
      ),
      
      'Day 2': (
        <div style={{lineHeight:'25px'}}>
          <h3>Day 2 Agenda</h3>
          
            <p>07:30-08:30: Registration, Early Morning Tea, Coffee</p>
           <br/><p>08:30: Welcome Back Remarks by Chair:<span style={{color:'blue'}}> Benoit Le Roy</span></p>
           <br/><p>08:35:<span style={{color:'blue'}}>Keynote Address:</span> PFAS in Concerns in Water Supplies</p>
            <p style={{marginLeft:'28px'}}>PFAS (Per- and polyfluoroalkyl substances) contamination in water supplies is a 
growing concern globally, including in South Africa. These "forever chemicals" 
are highly persistent in the environment and can pose significant health risks.
Addressing PFAS contamination is challenging due to the complexity and 
persistence of these chemicals. Treatment technologies such as adsorption, 
advanced oxidation, and granular activated carbon are being explored to remove 
PFAS from water supplies.</p>
<p style={{color:'blue', marginLeft:'26px'}}>Solomon Makate, Director, Drinking Water Regulation, DWS</p>

            <br/><p>09:20: PANEL DISCUSSION:</p>
            <p style={{marginLeft:'28px'}}>Led By <span style={{color:'blue'}}>Benoit Le Roy</span></p>
            <p style={{marginLeft:'28px'}}>CoCT and GP reuse plans, progress and PFAS mitigation strategies</p>
          <p style={{marginLeft:'28px'}}>Contamination pathways in Water systems & Food Sources.</p>
         <p style={{marginLeft:'28px'}}> Panellists:<span style={{color:'blue'}} >Leonardus Manus, Gary Brown</span></p>
            <br/><p style={{color:'blue', fontWeight:'bold'}}>10:00: Refreshment Break</p>
           <br/><p >10:30 CASE STUDY: coct-Re-use from Faure New Water scheme & PFAS Management</p>
            <p style={{marginLeft:'28px'}}>Reserved for the CoCT:<span style={{color:'blue'}}>Leonardus Manus</span></p>
            <br/><p>11:15: Regulating PFAS in Cosmetics: Balancing Public Health Protection and Industry</p>
            <p>Innovation:</p>
            <p style={{color:'blue',marginLeft:'26px'}}>Dr Gerhard Verdoorn</p>
            <br/><p>12:00 PANEL DISCUSSION: Toxicology of PFAS</p>
            <p style={{marginLeft:'26px'}}>Led By <span style={{color:'blue'}}> Anna, UnPoison </span></p>
            <br/><strong><p style={{color:'blue'}}>13:00 Lunch & Networking</p></strong>
            <br/><p style={{lineHeight:'25px'}}>14:00 Health Impacts of PFAS Exposure: Speaker invited from the DFFE</p>
            <ul style={{marginLeft:'46px'}}>
            <li>Health risks associated with PFAS, including cancer, immune system impacts, and hormonal disruption.</li>
            <li>Vulnerable populations in Africa and Health equity concerns.</li>
            <li>Risk assessment and exposure limits for PFAS in African contexts.</li>
            <li>Reducing Harm from PFAS: Research, Policy & Persistence.</li>
            </ul>
            <p>14:40 PFAS-free alternatives in manufacturing, firefighting, and textiles.</p>
            <ul></ul> style={{marginLeft:'46px'}}
              <li>• Corporate responsibility and sustainable business practices </li>
<br/><strong><p>15:15: Closing Remarks by Chair and End of Conference</p></strong>
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
            <strong>PFAS, (per- fluoroalkyl and poly-fluoroalkyl substances)</strong>,
             often dubbed <strong>"Forever Chemicals"</strong> due to their persistence in the 
             environment and potential health risks, have been a subject of increasing concern in 
             recent years.</p><br/>
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
    const handleScroll = () => {
      scroller.scrollTo('content-container', {
        duration: 500,
        delay: 0,
        smooth: true,
        offset: -80, // Adjust where it should stop
      });
    }

    return (
      <div className="content-container">
    {/*   <div className="header">
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
        </div> */} {/*
        <div className="tabs">
          {['Overview', 'Agenda', 'Speakers', 'Register', 'Sponsor'].map((tab) => (
            <button
              key={tab}
              className={activeTab === tab ? 'active-tab' : ''}
              onClick={() => {this.handleTabChange(tab);handleScroll()}} 
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

export default Content; */}