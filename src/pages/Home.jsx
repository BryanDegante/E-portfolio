import React from 'react'
import Landing from '../components/Landing'
import About from '../components/About'
import TechStack from '../components/TechStack'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

const Home = () => {
  return (
      <main>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer/>
    </main>
  )
}

export default Home