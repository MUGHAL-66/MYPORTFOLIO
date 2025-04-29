import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => (
  <footer className="footer-section">
    <div className="footer-content">
      <div className="footer-social">
        <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="mailto:usman@email.com" title="Email">
          <FaEnvelope />
        </a>
      </div>
      <p>© {new Date().getFullYear()} Usman Hasan. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
