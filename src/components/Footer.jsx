import React from 'react';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__info">
        © {new Date().getFullYear()} Samuel Boakye — Crafted with ❤️
      </div>
      <div className="footer__socials">
        <a href="https://github.com/SammyBGH" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/samuel-boakye1/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:sammyboakye@gmail.com" target="_blank" rel="noopener noreferrer">
          Email
        </a>
      </div>
    </footer>
  );
}
