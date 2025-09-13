import React from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import SocialSidebar from "./components/SocialSidebar"
import "./App.css"

export default function App(){
  return (
    <div className="app-root">
      <Nav />
      <SocialSidebar />
      <main>
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
