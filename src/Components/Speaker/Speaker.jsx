import {React, useState} from "react";
import "./Speaker.css";
import Candice from '../../assets/Candice.jpeg'
import Roy from '../../assets/LeRoy.jpeg'
import Okonkwo from '../../assets/Okonkwo.jpeg'
import Tylor from '../../assets/Taylor.jpeg'
import Velesia from '../../assets/Velesia.jpg'
import Solomon from '../../assets/Solomon.jpg'
import Erasmus from '../../assets/Erasmus.jpg'

const speakersData = [
  {
    id: 1,
    name: "Solomon Makate",
    position: "Director",
    topic: "Department of Water and Sanitation",
    bio: "Mr. Solomon Moitswadi Makate is the Director of Drinking Water Regulation at the Department of Water & Sanitation, a position he has held since September 2022. In this role, he oversees the regulation of water services in line with legislated norms and ensures the implementation of the National Water Services Act. He also manages the National Drinking Water Quality Consultative Audits and Blue Drop Certification programmes, and optimises the Integrated Regulatory Information System (IRIS) for over 1,000 water supply systems.",
    image: Solomon,
    
  },
  {
    id: 2,
    name: "Benoit Le Roy",
    position: "Water Ledger",
    topic: "",
    bio: "Benoît has in excess of forty years of environmental engineering experience concentrating on the Water-Waste-Energy nexus where he has been developing and integrating solutions with a focus on the digitalisation of the water value chain as it’s a fundamental economic enabler and national priority with 5IR governance philosophies implemented in a largely 3IR structured and managed water sector. ",
    image: Roy,  
  
  },
  {
    id: 3,
    name: "Dr Mariana Erasmus ",
    position: "Vice Director: Centre Mineral Biogeochemistry",
    topic: "University of Free State",
    bio: "Dr Mariana Erasmus is a distinguished researcher and specialist in Nature-Based Solutions, dedicated to advancing scientific research and sustainable environmental solutions. She holds a Ph.D. from the University of the Free State (UFS), South Africa, where she began her early career with significant contributions to environmental biotechnology.",
    image: Erasmus,

  },
  {
    id: 4,
    name: "Candace Van Pletzen",
    position: "SUN",
    topic: "",
    bio: "",
    image: Candice,
  },
  {
    id: 5,
    name: "Prof Okechukwu Jonathan Okonkwo",
    position: "Emeritus professor, Environmental chemistry",
    topic: "Tshwane university of Technology ",
    bio: "",
    image: Okonkwo,
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
    topic: "WaterLab",
    bio: "",
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
    name: "Gary Brown",
    position: "CEO",
    topic: "Dikubo Water Solutions",
    bio: "",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Rand Water",
    position: "Speaker profile to follow.",
    topic: "",
    bio: "",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Bryan Taylor",
    position: "Industries & Environmental, Global Business Development Manager",
    topic: "SGS SA",
    bio: "",
    image: Tylor,
  },
  {
    id: 12,
    name: "Velesia Lesch",
    position: "Environmental/Ecotoxicologist",
    topic: "Greenfield Sustainable Group",
    bio: "",
    image: Velesia,
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
            <p className="speaker-bio">{bioToShow}</p>
            <button
              onClick={() => toggleBio(speaker.id)}
              className="toggle-bio-button"
            >
              {isExpanded ? "See Less" : "See More"}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Speakers;