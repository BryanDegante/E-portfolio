import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './UI/ProjectCard';
import ProjectDescription from './UI/ProjectDescription';
import { ProjectData } from '../data/ProjectData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const projectsRef = useRef([]);

	useEffect(() => {
		const ctx = gsap.context(() => {
			projectsRef.current.forEach((el) => {
				const left = el.querySelector('.project__left');
				const right = el.querySelector('.project__right');
				const image = el.querySelector('.project__card');

				// main reveal timeline
				const tl = gsap.timeline({
					scrollTrigger: {
						trigger: el,
						start: 'top 80%',
					},
				});

				tl.from(left, {
					x: -80,
					opacity: 0,
					duration: 0.8,
					ease: 'power3.out',
				}).from(
					right,
					{
						x: 80,
						opacity: 0,
						duration: 0.8,
						ease: 'power3.out',
					},
					'-=0.6',
				);

				// 🔥 subtle parallax on image
				gsap.to(image, {
					y: -30,
					ease: 'none',
					scrollTrigger: {
						trigger: el,
						start: 'top bottom',
						end: 'bottom top',
						scrub: true,
					},
				});
			});
		});

		return () => ctx.revert();
	}, []);

	return (
		<section id="Projects">
			<div className="container">
				<h2 className="text__color--normal">PROJECTS</h2>

				<div className="projects__layout">
					{ProjectData.map((project, index) => (
						<div
							key={index}
							className="project__wrapper"
							ref={(el) => (projectsRef.current[index] = el)}
						>
							<div className="project__left">
								<ProjectCard
									tech={project.tech}
									src={project.screenshot}
									website={project.website}
								/>
							</div>

							<div className="project__right">
								<ProjectDescription
									name={project.name}
									description={project.description}
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Projects;
