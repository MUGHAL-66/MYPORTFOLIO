import React, { useState } from "react";
import "./Contact.css";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact</h2>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn">
            <FaPaperPlane style={{ marginRight: 8 }} /> Send Message
          </button>
          {submitted && <div className="contact-success">Thank you! Your message has been sent.</div>}
        </form>
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>Email: <a href="mailto:usman@email.com">usman@email.com</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">linkedin.com/in/your-linkedin</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
