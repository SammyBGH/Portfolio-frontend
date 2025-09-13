import React, { useEffect, useState, useRef } from 'react'
import '../styles/Skills.css'

const skills = [
  {name:'JavaScript', level:90},
  {name:'React', level:88},
  {name:'Node.js', level:75},
  {name:'CSS', level:85},
  {name:'TypeScript', level:60}
]

export default function Skills() {
  const [visible, setVisible] = useState(false)
  const sectionRef = useRef(null)

  // Trigger animation when section is in viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(sectionRef.current)
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <h2>Skills</h2>
      <div className="skills__list">
        {skills.map(s => (
          <div key={s.name} className="skill">
            <div className="skill__label">{s.name}</div>
            <div className="skill__bar">
              <div
                className="skill__fill"
                style={{width: visible ? `${s.level}%` : '0%'}}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
