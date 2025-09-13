import React from "react";
import "../styles/Hero.css";
import avatar from "../assets/avatar.jpg";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero__left">
        <h1 className="hero__title">
          Hey, I’m <span className="hero__name">Samuel Boakye.</span>
        </h1>

        <p className="hero__subtitle">
          I build fast, accessible, and delightful web experiences. React
          enthusiast. Design-minded.
        </p>

        <div className="hero__actions">
          <a className="btn primary" href="#projects">
            See projects
          </a>
          <a className="btn ghost" href="#contact">
            Work with me
          </a>
        </div>

        <div className="hero__meta">
          <div>
            <strong>Available:</strong> Open to roles & freelance
          </div>
          <div>
            <strong>Location:</strong> Ghana
          </div>
        </div>
      </div>

      <div className="hero__right">
        <div className="avatar__wrap">
          <img src={avatar} alt="avatar" className="avatar" />
        </div>
      </div>
    </section>
  );
}
