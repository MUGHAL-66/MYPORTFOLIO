import React, { useState } from "react";
import "./Services.css";
import { FaCode, FaCloud, FaMobileAlt, FaPaintBrush, FaBug, FaUsers, FaDatabase, FaRocket, FaVideo, FaCogs, FaPencilRuler, FaShoppingCart, FaNetworkWired, FaShareAlt } from "react-icons/fa";

const allServices = [
  { icon: <FaCode />, title: "Web Development", desc: "Modern, responsive websites and web apps." },
  { icon: <FaMobileAlt />, title: "Mobile Apps", desc: "Cross-platform mobile solutions." },
  { icon: <FaCloud />, title: "Cloud Deployment", desc: "Deploy scalable apps on AWS, Azure, GCP." },
  { icon: <FaPaintBrush />, title: "UI/UX Design", desc: "Beautiful, user-friendly interfaces." },
  { icon: <FaBug />, title: "Testing & QA", desc: "Unit, integration, and E2E testing." },
  { icon: <FaUsers />, title: "Mentoring", desc: "Helping teams grow and upskill." },
  { icon: <FaDatabase />, title: "Database Design", desc: "Efficient, secure data management." },
  { icon: <FaRocket />, title: "Performance Optimization", desc: "Fast, efficient web applications." },
  { icon: <FaCogs />, title: "Software Development", desc: "Custom software solutions for your business needs." },
  { icon: <FaVideo />, title: "Video Editing", desc: "Professional video editing for marketing and social media." },
  { icon: <FaDatabase />, title: "Database Management", desc: "Reliable and optimized database administration." },
  { icon: <FaPencilRuler />, title: "Graphic Designing", desc: "Creative graphics for branding and digital presence." },
  { icon: <FaShareAlt />, title: "Social Media Management", desc: "Grow your audience and engagement with expert management." },
  { icon: <FaShoppingCart />, title: "Ecommerce Development", desc: "Full-featured online stores and shopping solutions." },
  { icon: <FaNetworkWired />, title: "API Development & Integration", desc: "Robust APIs to connect and automate your systems." },
];

const INITIAL_VISIBLE = 6;
const Services = () => {
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const allShown = visible >= allServices.length;
  return (
    <section id="services" className="services-section">
      <h2 className="section-title">Our Services</h2>
      <div className="services-cards">
        {allServices.slice(0, visible).map((service, idx) => (
          <div className="service-card" key={idx}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
      <div className="services-btn-container">
        {allShown ? (
          <button className="btn" onClick={() => setVisible(INITIAL_VISIBLE)}>
            Show Less
          </button>
        ) : (
          <button className="btn" onClick={() => setVisible(allServices.length)}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Services;
