import React, { useState } from 'react'
import '../styles/Projects.css'
import { projects } from '../data'

export default function Projects(){
  const [showAll, setShowAll] = useState(false)

  // Show either first 3 projects or all
  const displayedProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="projects">
      <h2>Selected Projects</h2>
      <div className="projects__grid">
        {displayedProjects.map(p => (
          <article key={p.id} className="project">
            <img src={p.image} alt={p.title} className="project__image"/>
            <div className="project__content">
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="tags">
                {p.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="tag"
                    style={{ background: skill.color, color: '#0b0b12' }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
            <a className="project__link" href={p.link} target='_blank' rel="noopener noreferrer">View</a>
          </article>
        ))}
      </div>

      <div className="projects__toggle">
        <button className="btn ghost" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show Less' : 'Show More'}
        </button>
      </div>
    </section>
  )
}
