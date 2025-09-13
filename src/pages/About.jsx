import React from 'react'
import '../styles/About.css'

export default function About(){
  return (
    <section id="about" className="about">
      <h2>About</h2>
      <p>
        I’m a web developer focused on crafting polished user experiences.
        I care about accessibility, performance, and clean code.
        I enjoy collaborating with designers and product teams to ship delightful features.
        When I'm not coding, I love exploring design trends, experimenting with creative coding, and enjoying a good cup of coffee.
      </p>

      <div className="about__grid">
        <div className="card">
          <h3>Education</h3>
          <p>BSc. Electrical and Electronics Engineering</p>
        </div>

        <div className="card">
          <h3>Interests</h3>
          <p>Design systems, performance optimization, creative coding, coffee shops</p>
        </div>

        <div className="card">
          <h3>Experience</h3>
          <p>Worked on multiple full-stack projects using React, Node.js, and modern web technologies. Freelance and team projects alike.</p>
        </div>

        <div className="card">
          <h3>Tools & Technologies</h3>
          <p>React.js, JavaScript, Node.js, MongoDB, CSS, HTML, Git, VS Code, Figma</p>
        </div>
      </div>
    </section>
  )
}
