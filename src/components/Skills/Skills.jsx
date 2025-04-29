import React, { useState } from "react";
import "./Skills.css";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaDatabase, FaAws, FaGitAlt, FaJs, FaSass, FaGit, FaFigma, FaDocker, FaWordpress, FaCode, FaPalette, FaProjectDiagram, FaFileCode, FaFilm, FaRegImage } from "react-icons/fa";

const allSkills = [
  { icon: <FaReact />, title: "React", level: "Expert" },
  { icon: <FaJs />, title: "JavaScript", level: "Expert" },
  { icon: <FaCode />, title: "TypeScript", level: "Advanced" },
  { icon: <FaNodeJs />, title: "Node.js", level: "Advanced" },
  { icon: <FaDatabase />, title: "MongoDB", level: "Advanced" },
  { icon: <FaDatabase />, title: "PostgreSQL", level: "Intermediate" },
  { icon: <FaHtml5 />, title: "HTML5", level: "Expert" },
  { icon: <FaCss3Alt />, title: "CSS3", level: "Expert" },
  { icon: <FaSass />, title: "SASS", level: "Advanced" },
  { icon: <FaCode />, title: "Redux", level: "Advanced" },
  { icon: <FaDatabase />, title: "SQL", level: "Advanced" },
  { icon: <FaProjectDiagram />, title: "GraphQL", level: "Intermediate" },
  { icon: <FaGitAlt />, title: "Git", level: "Expert" },
  { icon: <FaFigma />, title: "Figma", level: "Advanced" },
  { icon: <FaPalette />, title: "Adobe Photoshop", level: "Advanced" },
  { icon: <FaPalette />, title: "Adobe Illustrator", level: "Intermediate" },
  { icon: <FaRegImage />, title: "Canva", level: "Advanced" },
  { icon: <FaFilm />, title: "Adobe Premiere", level: "Intermediate" },
  { icon: <FaCode />, title: "TailwindCSS", level: "Advanced" },

  { icon: <FaCode />, title: "Next.js", level: "Intermediate" },
  { icon: <FaDocker />, title: "Docker", level: "Intermediate" },
  { icon: <FaFileCode />, title: "RESTful APIs", level: "Advanced" },
  { icon: <FaCode />, title: "Responsive", level: "Expert" },
  { icon: <FaWordpress />, title: "WordPress", level: "Intermediate" },
];

const INITIAL_VISIBLE = 8;
const Skills = () => {
  const [visible, setVisible] = useState(INITIAL_VISIBLE);
  const allShown = visible >= allSkills.length;
  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-cards">
        {allSkills.slice(0, visible).map((skill, idx) => (
          <div className="skill-card" key={idx}>
            <div className="skill-icon">{skill.icon}</div>
            <h3>{skill.title}</h3>
            <span className="skill-level">{skill.level}</span>
          </div>
        ))}
      </div>
      <div className="skills-btn-container">
        {allShown ? (
          <button className="btn" onClick={() => setVisible(INITIAL_VISIBLE)}>
            Show Less
          </button>
        ) : (
          <button className="btn" onClick={() => setVisible(allSkills.length)}>
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default Skills;
