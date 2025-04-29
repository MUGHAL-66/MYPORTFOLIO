import React, { useState } from "react";
import "./Portfolio.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const allProjects = [
  {
    image: "/ecommerce.jpeg",
    title: "E-Commerce Platform",
    desc: "A scalable MERN stack e-commerce solution.",
    github: "https://github.com/yourusername/ecommerce",
    demo: "https://ecommerce-demo.com",
  },
  {
    image: "/portfolio.jpeg",
    title: "Portfolio Website",
    desc: "Personal portfolio built with React and Framer Motion.",
    github: "https://github.com/yourusername/portfolio",
    demo: "https://your-portfolio.com",
  },
  {
    image: "/chat.jpeg",
    title: "Chat App",
    desc: "Real-time chat app using Node.js and Socket.io.",
    github: "https://github.com/yourusername/chat-app",
    demo: "https://chat-app-demo.com",
  },
  {
    image: "/task.jpeg",
    title: "Task Manager",
    desc: "Task management tool with user authentication.",
    github: "https://github.com/yourusername/task-manager",
    demo: "https://task-manager-demo.com",
  },
  {
    image: "/blog.jpeg",
    title: "Blog Platform",
    desc: "Full-featured blogging platform with markdown support.",
    github: "https://github.com/yourusername/blog-platform",
    demo: "https://blog-demo.com",
  },
  {
    image: "/weather.jpeg",
    title: "Weather Dashboard",
    desc: "Weather app using OpenWeatherMap API.",
    github: "https://github.com/yourusername/weather-dashboard",
    demo: "https://weather-demo.com",
  },
  {
    image: "/finance.jpeg",
    title: "Finance Tracker",
    desc: "Personal finance tracker with charts and analytics.",
    github: "https://github.com/yourusername/finance-tracker",
    demo: "https://finance-demo.com",
  },
  {
    image: "/recipie.jpeg",
    title: "Recipe Finder",
    desc: "App to discover and save recipes.",
    github: "https://github.com/yourusername/recipe-finder",
    demo: "https://recipe-demo.com",
  },
  {
    image: "/school.jpeg",
    title: "School Management System",
    desc: "Comprehensive platform for managing students, teachers, and classes.",
    github: "https://github.com/yourusername/school-management",
    demo: "#",
  },
  {
    image: "/library.jpeg",
    title: "Library System",
    desc: "Digital library management for books, members, and lending.",
    github: "https://github.com/yourusername/library-system",
    demo: "#",
  },
  {
    image: "/event.jpeg",
    title: "Event Management System",
    desc: "Organize and manage events, registrations, and schedules.",
    github: "https://github.com/yourusername/event-management",
    demo: "#",
  },
  {
    image: "/shopify.jpeg",
    title: "Shopify Stores",
    desc: "Custom Shopify e-commerce stores for various businesses.",
    github: "https://github.com/yourusername/shopify-stores",
    demo: "#",
  },
  {
    image: "/taskapp.jpeg",
    title: "Task Manager App",
    desc: "Efficient app to manage daily tasks and productivity.",
    github: "https://github.com/yourusername/task-manager-app",
    demo: "#",
  },
  {
    image: "/atm.jpeg",
    title: "ATM Simulation System",
    desc: "Simulated ATM system for cash withdrawal, deposit, and balance inquiry.",
    github: "https://github.com/yourusername/atm-simulation",
    demo: "#",
  },
  {
    image: "/chess.jpeg",
    title: "Chess Game",
    desc: "Classic chess game playable against computer or friends.",
    github: "https://github.com/yourusername/chess-game",
    demo: "#",
  },
  {
    image: "/Calculator.jpeg",
    title: "Calculator",
    desc: "Simple and scientific calculator web app.",
    github: "https://github.com/yourusername/calculator",
    demo: "#",
  },


];

const INITIAL_VISIBLE = 6;
const Portfolio = () => {
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const allShown = visible >= allProjects.length;
  return (
    <section id="portfolio" className="portfolio-section">
      <h2 className="section-title">Projects</h2>
      <div className="portfolio-cards">
        {allProjects.slice(0, visible).map((project, idx) => (
          <div className="portfolio-card" key={idx}>
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="portfolio-image"
                style={{ width: '100%', height: '160px', objectFit: 'cover', borderRadius: '10px', marginBottom: '14px' }}
              />
            )}
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="portfolio-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className="portfolio-btn-container">
        {allShown ? (
          <button className="btn" onClick={() => setVisible(INITIAL_VISIBLE)}>
            Show Less
          </button>
        ) : (
          <button className="btn" onClick={() => setVisible(allProjects.length)}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
