import React from "react";
import "./Speaker.css";

const speakersData = [
  {
    id: 1,
    name: "John Doe",
    position: "Keynote Speaker",
    topic: "The Future of Technology",
    bio: "John has over 20 years of experience in the tech industry. He is an innovator, entrepreneur, and thought leader. His work has impacted millions worldwide, inspiring people to embrace technology. He is passionate about AI and its potential to transform lives. John has spoken at numerous global events, delivering insightful and engaging presentations. His ability to simplify complex topics is unmatched. He believes in using technology to create a better world.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Data Scientist",
    topic: "Demystifying Big Data",
    bio: "Jane is a renowned data scientist with expertise in big data analytics. She has led projects for Fortune 500 companies and helped organizations unlock insights from their data. Jane is also an advocate for ethical AI and transparent algorithms. She teaches data science workshops and enjoys mentoring upcoming professionals. Jane’s presentations are a blend of technical depth and practical insights, making complex topics accessible to all.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    name: "Michael Johnson",
    position: "Software Engineer",
    topic: "Building Scalable Applications",
    bio: "Michael is a senior software engineer specializing in scalable web and mobile applications. He has worked with startups and large enterprises, focusing on performance optimization. Michael shares his experience through blogs and conference talks. He emphasizes best practices in software development and has a knack for simplifying complex architectures. He believes in building applications that are both user-friendly and future-proof.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    name: "Emily Davis",
    position: "Cybersecurity Expert",
    topic: "Protecting Digital Assets",
    bio: "Emily is a cybersecurity expert with a focus on network security and data protection. She has designed security frameworks for global organizations. Emily regularly speaks at cybersecurity conferences, sharing insights into preventing data breaches. Her sessions highlight the importance of proactive measures in an increasingly connected world. Emily is passionate about raising awareness on online safety and privacy.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    name: "David Lee",
    position: "Marketing Strategist",
    topic: "Digital Marketing Trends",
    bio: "David is a digital marketing strategist with a decade of experience in helping brands grow online. He has worked on campaigns for top brands, leveraging social media, SEO, and paid advertising. David’s presentations are filled with actionable tips and case studies. He believes in a data-driven approach to marketing and is passionate about helping businesses connect with their audiences effectively.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    name: "Sophia Wilson",
    position: "UX Designer",
    topic: "Human-Centered Design",
    bio: "Sophia is a user experience designer who creates intuitive and accessible interfaces. Her designs are informed by user research and testing. Sophia has collaborated with tech companies and nonprofits to improve user engagement. She often speaks about the importance of empathy in design and shares practical tips for creating user-friendly experiences. Sophia’s passion lies in making technology more inclusive.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    name: "James Brown",
    position: "Entrepreneur",
    topic: "Scaling Startups",
    bio: "James is a successful entrepreneur who has founded multiple startups in the tech space. His expertise includes business strategy, fundraising, and team building. James enjoys mentoring aspiring entrepreneurs and sharing lessons from his journey. He speaks about the challenges of scaling startups and the importance of resilience. His engaging talks inspire audiences to pursue their entrepreneurial dreams.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    position: "AI Researcher",
    topic: "The Impact of AI",
    bio: "Olivia is an AI researcher focused on machine learning and its applications in healthcare. Her work has led to breakthroughs in early disease detection. Olivia has published papers in top journals and speaks at conferences worldwide. She is passionate about using AI to solve real-world problems and emphasizes the ethical implications of AI. Olivia’s talks are thought-provoking and inspiring.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    name: "Ethan Martinez",
    position: "Blockchain Developer",
    topic: "Blockchain Beyond Cryptocurrency",
    bio: "Ethan is a blockchain developer who has contributed to innovative projects in the finance and supply chain sectors. He demystifies blockchain technology for non-technical audiences. Ethan is passionate about exploring the potential of decentralized systems. He has a talent for making technical concepts relatable and engaging. His presentations focus on practical applications of blockchain and its future prospects.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    name: "Ava Anderson",
    position: "Leadership Coach",
    topic: "Transformational Leadership",
    bio: "Ava is a leadership coach with experience training executives across industries. Her coaching focuses on emotional intelligence, effective communication, and team dynamics. Ava has a unique ability to connect with her audience and inspire them to lead with authenticity. She has authored several books on leadership and personal development. Ava’s sessions are a blend of theory and practical insights.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 11,
    name: "Liam White",
    position: "Product Manager",
    topic: "Innovation in Product Development",
    bio: "Liam is a product manager known for launching successful products in competitive markets. He emphasizes customer-centric approaches and cross-functional collaboration. Liam’s talks are filled with real-world examples and strategies for driving innovation. He believes in the power of agile methodologies and continuous learning. His enthusiasm for product development is contagious, inspiring teams to excel.",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 12,
    name: "Isabella Green",
    position: "Climate Scientist",
    topic: "Sustainable Solutions",
    bio: "Isabella is a climate scientist dedicated to finding sustainable solutions to environmental challenges. She works on projects related to renewable energy and conservation. Isabella’s research has influenced policy changes and raised awareness about climate issues. She is a passionate advocate for sustainability and frequently speaks at environmental forums. Isabella’s talks are both informative and inspiring, encouraging audiences to take action.",
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

