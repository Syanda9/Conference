import {React, useState} from "react";
import "./Speaker.css";
import Candice from '../../assets/Candice.jpeg'
import Roy from '../../assets/LeRoy.jpeg'
import Okonkwo from '../../assets/Okonkwo.jpeg'
import Tylor from '../../assets/Taylor.jpeg'
import Velesia from '../../assets/Velesia.jpg'
import Solomon from '../../assets/Solomon.jpg'
import Erasmus from '../../assets/Erasmus.jpg'
import Felicia from '../../assets/Felicia.jpg'

const speakersData = [
  {
    id: 1,
    name:"Prof. Leslie Petrik (P.h.d)",
    position:"Environmental and Nano Science (ENS)",
    topic:"University of the Western Cape. Department of Chemistry",
    bio:"Professional with a Doctor of Philosophy (Ph.D.) focused in Chemical Sciences from University of the Western Cape/Universiteit van Wes-Kaapland. Demonstrated history of working in the higher education industry. Skilled in Research, Lecturing, and Teaching. 2021 Recipient of the Water Legends Award of the Water Research Commission of South Africa in the category Water Use and Waste Management at their Knowledge Tree Awards on 23 Sept 2021, in recognition of Leslie Petrik’s contribution to water science nationally and internationally.",
    image: Felicia,
  },
  {
    id: 2,
    name: "Prof Okechukwu Jonathan Okonkwo",
    position: "Emeritus professor, Environmental chemistry",
    topic: "Tshwane university of Technology ",
    bio: "",
    image: Okonkwo,
  
  },
  {
    id: 3,
    name: "Dr Mariana Erasmus ",
    position: "Vice Director: Centre Mineral Biogeochemistry",
    topic: "University of Free State",
    bio: "Dr Mariana Erasmus is a distinguished researcher and specialist in Nature-Based Solutions, dedicated to advancing scientific research and sustainable environmental solutions. She holds a Ph.D. from the University of the Free State (UFS), South Africa, where she began her early career with significant contributions to environmental biotechnology. During her postgraduate studies, Dr Erasmus worked part-time as a research consultant, collaborating with clients and engineers to plan experiments and manage site visits. This role enhanced her skills in project management, bioremediation, and environmental biotechnology. In 2017, Dr Erasmus was appointed as a Platform Manager at UFS, directing commercial research projects and facilitating the commercialization of research outcomes. In 2021, she advanced to Vice-Director of the Centre for Mineral Biogeochemistry (CMBG) at UFS and has recently taken over as the Acting Director of CMBG, where she is overseeing research projects, managing operations and finances, and engaging stakeholders to foster collaborative initiatives. She also played a crucial role in establishing the CMBG’s state-of-the-art facilities. Dr Erasmus’s research spans bioremediation, soil rehabilitation, and sustainable agriculture. She has authored/co-authored numerous scientific publications, including in high-impact journals such as Nature. Her work has attracted over R 60 million in research grants and earned accolades like the “Top Ten New Species” award in 2016. Beyond research, Dr Erasmus is committed to teaching, mentoring, and supervising. She also actively engages in community outreach activities, serving as an academic examiner, editor, expert witness, and EXCO member of a Science and Technology Fair. Dr Erasmus remains dedicated to impactful contributions to environmental science and sustainable development, nurturing the next generation of scientists and leaders.",
    image: Erasmus,

  },
  {
    id: 4,
    name: "Solomon Makate",
    position: "Director",
    topic: "Department of Water and Sanitation",
    bio: "Mr. Solomon Moitswadi Makate is the Director of Drinking Water Regulation at the Department of Water & Sanitation, a position he has held since September 2022. In this role, he oversees the regulation of water services in line with legislated norms and ensures the implementation of the National Water Services Act. He also manages the National Drinking Water Quality Consultative Audits and Blue Drop Certification programmes, and optimises the Integrated Regulatory Information System (IRIS) for over 1,000 water supply systems.Previously, Mr. Makate served as Director: Wastewater Services Regulation from 2015 to 2019, where he successfully managed the Green Drop Certification programme. He also led the revision of Regulation 2834, which became Regulation 3630 under the Water Services Act. His international experience includes representing South Africa at the Japan International Cooperation Agency and participating in the BRICS Water Sector technical task team in Russia.In addition to his professional achievements, Mr. Makate has contributed to critical water-related crisis investigations, such as the Delmas and Blemhof cholera outbreaks. He has also played a key role in the Aqua Enduro programme, which has awarded over 150 bursaries to learners pursuing studies in water-related engineering and science. Mr. Makate is a member of the Engineering Council of South Africa and the Water Institute of Southern Africa.",
    image: Solomon,
  },
  {
    id: 5,
    name: "Benoit Le Roy",
    position: "Water Ledger",
    topic: "",
    bio: "Benoît has in excess of forty years of environmental engineering experience concentrating on the Water-Waste-Energy nexus where he has been developing and integrating solutions with a focus on the digitalisation of the water value chain as it’s a fundamental economic enabler and national priority with 5IR governance philosophies implemented in a largely 3IR structured and managed water sector. Current activities are focusing on the revitalisation of the South African water sector with a lead role in the SA Water Chamber as co-founder and CEO where these initiatives seek to engender water resilience and attract investment back into South Africa by aligning the public and private stakeholder expectations. Benoît is the Operations Director and a shareholder of Nexus Water Alchemy and a founding director and CEO of Water Ledger SA that now has a global parent to share and implement in the latest digitalisation solutions primarily in the water arena. Water ledger is based in Ireland where he is also a founding director in a team that is the first to tokenise water trades globally in the distributed ledger approach with groundbreaking success. Benoît contributes regularly to various publications locally and globally mostly in the water sector that has gained much attention due to significant issues being experienced in a stochastic world driven largely by growing population, urbanisation and climate change.",
    image: Roy,
  },
  {
    id: 6,
    name: "Leonardo Manus",
    position: "City of Cape Town",
    topic: "",
    bio: "",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "Leanne Coetzee",
    position: "Consultant",
    topic: "Water",
    bio: "   ",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Dr Gerhard Verdoorn",
    position: "CropLife",
    topic: "",
    bio: "",
    image: "https://via.placeholder.com/150",
  },

  {
    id: 9,
    name: "Rand Water",
    position: "Speaker profile to follow.",
    topic: "",
    bio: "",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Bryan Taylor",
    position: "Industries & Environmental, Global Business Development Manager",
    topic: "SGS SA",
    bio: "",
    image: Tylor,
  },
  {
    id: 11,
    name: "Velesia Lesch",
    position: "Environmental/Ecotoxicologist",
    topic: "Greenfield Sustainable Group",
    bio: "",
    image: Velesia,
  },
  {
    id: 12,
    name: "Candace Van Pletzen",  
    position: "SUN",
    topic: "",
    bio: "",
    image: Candice,
    
},
];

const Speakers = () => {
  const [expandedSpeakers, setExpandedSpeakers] = useState({});

  const toggleBio = (id) => {
    setExpandedSpeakers((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="speakers-container">
      {speakersData.map((speaker) => {
        const isExpanded = expandedSpeakers[speaker.id];
        const bioToShow = isExpanded
          ? speaker.bio
          : speaker.bio.split(" ").slice(0, 30).join(" ") + "..."; // Adjust word limit as needed

        return (
          <div key={speaker.id} className="speaker-card">
            <img
              src={speaker.image}
              alt={speaker.name}
              className="speaker-image"
            />
            <h3 className="speaker-name">{speaker.name}</h3>
            <p className="speaker-position">{speaker.position}</p>
            <h4 className="speaker-topic">{speaker.topic}</h4>
            <p className="speaker-bio">
              {isExpanded ? speaker.bio : bioToShow}
              {!isExpanded && (
                <span
                  className="See-more"
                  onClick={() => toggleBio(speaker.id)}
                >
                  See More
                </span>
              )}
              {isExpanded && (
                <span
                  className="See-more"
                  onClick={() => toggleBio(speaker.id)}
                >
                  See Less
                </span>
              )}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default Speakers;