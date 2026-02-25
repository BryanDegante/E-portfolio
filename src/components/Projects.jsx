import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import ProjectCard from './UI/ProjectCard';
import ProjectDescription from './UI/ProjectDescription';
import { ProjectData } from '../data/ProjectData';

const Projects = () => {
	return (
        <section id="Projects">
            <div className="container">

			<div className="projects__layout">
				<div className="projects__left">
					{ProjectData.map((project, index) => (
                        <ProjectCard
                        website={project.website}
                        name={project.name}
                            src={project.screenshot}
                            tech={project.tech}
                        />
					))}
				</div>

				<div className="projects__right">
					{ProjectData.map((project, index) => (
                        <ProjectDescription
                        description={project.description}
                        name={project.name}
                        />
					))}
				</div>
			</div>
                    </div>
		</section>
	);
};

export default Projects;
