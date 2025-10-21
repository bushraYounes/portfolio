import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import Hero from '../components/Hero'
import About from '../components/About'
import Education from '../components/Education'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contacts from '../components/Contacts'
import ProductionBanner from '../components/ProductionBanner'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <ProductionBanner />
      <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>

        {/*Theme Toggle */}
        <ThemeToggle />

        {/*Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <NavBar />

        {/* Main Content */}
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Certifications />
          <Contacts />
        </main>

        {/* Footer */}
        <Footer/>
      </div>
    </>

  )
}

export default Home