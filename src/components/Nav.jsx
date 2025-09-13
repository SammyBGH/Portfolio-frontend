import React, { useState, useEffect, useRef } from 'react'
import '../styles/Nav.css'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Close menu when clicking a link
  const handleLinkClick = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav__brand">MyPortfolio</div>

      <ul className={`nav__links ${menuOpen ? 'open' : ''}`}>
        <li><a href="#hero" onClick={handleLinkClick}>Home</a></li>
        <li><a href="#about" onClick={handleLinkClick}>About</a></li>
        <li><a href="#skills" onClick={handleLinkClick}>Skills</a></li>
        <li><a href="#projects" onClick={handleLinkClick}>Projects</a></li>
        <li><a href="#contact" onClick={handleLinkClick}>Contact</a></li>

        {/* Mobile-only buttons */}
        <li className="mobile-only">
          <a href="/resume.pdf" download className="btn ghost">Resume</a>
        </li>
        <li className="mobile-only">
          <a href="#contact" className="nav__cta">Hire Me</a>
        </li>
      </ul>

      {/* Desktop buttons */}
      <div className="nav__actions desktop-only">
        <a href="/resume.pdf" download className="btn ghost">Resume</a>
        <a href="#contact" className="nav__cta">Hire Me</a>
      </div>

      <button
        className={`nav__hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  )
}
