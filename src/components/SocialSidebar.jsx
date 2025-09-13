import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "../styles/SocialSidebar.css";

export default function SocialSidebar() {
  return (
    <div className="social-sidebar">
      <a
        href="https://github.com/SammyBGH"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link github"
      >
        <FaGithub className="icon" />
        <span className="label">GitHub</span>
      </a>
      <a
        href="https://www.linkedin.com/in/samuel-boakye1/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-link linkedin"
      >
        <FaLinkedin className="icon" />
        <span className="label">LinkedIn</span>
      </a>
      <a
        href="mailto:sammyboakye35@gmail.com"
        className="social-link email"
      >
        <FaEnvelope className="icon" />
        <span className="label">Email</span>
      </a>
    </div>
  );
}
