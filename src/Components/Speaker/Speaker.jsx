import React from "react";
import "./Speaker.css";

const speakersData = [
  {
    id: 1,
    name: "John Doe",
    position: "Chairperson",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Keynote Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "John Doe",
    position: "keynote Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Jane Smith",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "John Doe",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Jane Smith",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "John Doe",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Jane Smith",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "John Doe",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Jane Smith",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "John Doe",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Jane Smith",
    position: "Speaker",
    topic: "",
    bio: "BIO to be added",
    image: "https://via.placeholder.com/150",
  },
];

const Speakers = () => {
  return (
    <div className="speakers-container">
      {speakersData.map((speaker) => (
        <div key={speaker.id} className="speaker-card">
          <img src={speaker.image} alt={speaker.name} className="speaker-image" />
          <h3 className="speaker-name">{speaker.name}</h3>
          <p className="speaker-position">{speaker.position}</p>
          <h4 className="speaker-topic">{speaker.topic}</h4>
          <p className="speaker-bio">{speaker.bio}</p>
        </div>
      ))}
    </div>
  );
};

export default Speakers;

