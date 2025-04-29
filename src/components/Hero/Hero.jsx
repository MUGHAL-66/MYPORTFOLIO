import React from "react";
import "./Hero.css";
import { motion } from "framer-motion";
import { FaDownload, FaEnvelope } from "react-icons/fa";
// import your image to public or src/assets/images/myphoto.jpg

const roles = [
  "I am a Software Engineer",
  "I am a Database Administrator",
  "I am a Full Stack Developer",
  "I am a UI/UX Designer",
  "I am a Web Designer",
  "I am a Graphic Designer"
];

const AnimatedRoles = () => {
  const [index, setIndex] = React.useState(0);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, 1800);
    return () => clearInterval(interval);
  }, []);
  return (
    <motion.h2
      key={roles[index]}
      className="animated-role"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ duration: 0.5 }}
      style={{ color: "#007bff", fontWeight: 700, fontSize: "2.1rem", marginBottom: 16, minHeight: 40 }}
    >
      {roles[index]}
    </motion.h2>
  );
};

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="hero-content">
      <motion.div
        className="hero-text"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          Asslam o Alaikum, I'm <span className="highlight">Usman Hassan</span>
        </h1>
        <AnimatedRoles />
        <p className="hero-intro">
          <span role="img" aria-label="wave">👋</span> <strong>Welcome to my portfolio!</strong><br />
          I'm a dedicated Software Engineer with a versatile skill set in web design, full-stack development, database management, graphic design, and video editing. I focus on creating smooth, responsive, and visually appealing digital experiences that are both functional and user-friendly. Whether it's building interfaces, managing data, or designing visuals, I’m passionate about delivering high-quality, creative, and efficient solutions.
        </p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">
            <FaEnvelope className="btn-icon" /> Contact Me
          </a>
          <a href="/Usman%20CV.pdf" className="btn btn-outline" download>
            <FaDownload className="btn-icon" /> Download CV
          </a>
        </div>
      </motion.div>
      <motion.div
        className="hero-image"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.07, rotate: 3 }}
        transition={{ duration: 0.8 }}
      >
        {/* Place your image in public/myphoto.jpg or src/assets/images/myphoto.jpg */}
        <img src="/myphoto2.jpg" alt="Usman Hasan" />
      </motion.div>
    </div>
  </section>
);

export default Hero;
