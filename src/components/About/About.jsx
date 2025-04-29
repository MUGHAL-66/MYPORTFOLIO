import React, { useState } from "react";
import "./About.css";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          {/* Place your image in public/myphoto.jpg or src/assets/images/myphoto.jpg */}
          <img src="/myphoto1.jpg" alt="Usman Hasan" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            With a strong background in Software Engineering, I specialize in both Front-end and Back-end development, contributing to the creation of smooth, intuitive user experiences and robust, scalable server-side functionalities. My experience as a Database Administrator allows me to manage and optimize data systems for reliable, high-performance software solutions. In addition to core development, I bring creativity into my work through Graphic Design and Video Editing, enabling me to support a wide range of visual and multimedia projects.<br /><br />
            My expertise in UI/UX design bridges the gap between functionality and aesthetics, ensuring every digital interaction is both engaging and user-friendly. I enjoy transforming ideas into fully functional, visually appealing solutions that meet real-world needs. With this diverse and well-rounded skill set, I’m equipped to deliver high-quality results across both technical and creative domains—bringing innovation, precision, and passion to every project.
          </p>
          <button className="btn btn-outline" onClick={() => setShowMore(!showMore)}>
            {showMore ? "Show Less" : "Read More"}
          </button>
          {showMore && (
            <div className="about-more-box">
              {/* Place your additional information here */}
              <strong>More Information</strong>
              <p>
              I thrive in collaborative environments, enjoy mentoring others, and constantly seek opportunities to learn and grow with the latest technologies. I’m especially interested in cloud deployment, DevOps practices, and staying up-to-date with emerging trends in tech and design. Exploring innovative tools and frameworks is something I genuinely enjoy, as it helps me bring fresh ideas and efficiency to every project.

Beyond the screen, I’m passionate about photography, traveling, and discovering new ways to express my creativity. Whether it's capturing moments through a lens or diving into a new design concept, I find inspiration in every experience. My mix of technical expertise, creative flair, and curiosity allows me to bring a unique perspective to everything I do.
              </p>
            </div>
          )}
          <a
            href="https://www.linkedin.com/in/your-linkedin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
            style={{ marginLeft: "10px" }}
          >
            <FaLinkedin style={{ marginRight: 6 }} /> Connect on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
