import React from 'react'
import ProjectCard from './UI/ProjectCard'
import ProjectDescription from './UI/ProjectDescription'

const Projects = () => {
  return (
      <section id='Projects'>
          <div className="container">
              <div className="project__wrapper">
                  <ProjectCard />
                  <ProjectDescription/>
              </div>
          </div>
    </section>
  )
}

export default Projects