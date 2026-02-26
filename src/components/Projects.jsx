import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './UI/ProjectCard';
import ProjectDescription from './UI/ProjectDescription';
import { ProjectData } from '../data/ProjectData';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
	const rightRef = useRef(null);
	const leftRefs = useRef([]);
	leftRefs.current = [];

	const addToRefs = (el) => {
		if (el && !leftRefs.current.includes(el)) {
			leftRefs.current.push(el);
		}
	};

	useEffect(() => {
		let ctx = gsap.context(() => {
			const layout = document.querySelector('.projects__layout');

			// Pin the right side while left scrolls
			ScrollTrigger.create({
				trigger: layout,
				start: 'top top',
				end: () => `+=${layout.offsetHeight}`,
				pin: rightRef.current,
				pinSpacing: true,
				scrub: false,
			});

			// Show description as you scroll left cards
			leftRefs.current.forEach((el, index) => {
				ScrollTrigger.create({
					trigger: el,
					start: 'top center',
					end: 'bottom center',
					onEnter: () => showDescription(index),
					onEnterBack: () => showDescription(index),
				});
			});
		});

		return () => ctx.revert();
	}, []);

	const showDescription = (activeIndex) => {
		rightRef.current.childNodes.forEach((desc, index) => {
			gsap.to(desc, {
				opacity: index === activeIndex ? 1 : 0,
				y: index === activeIndex ? 0 : 20,
				duration: 0.5,
				ease: 'power2.out',
			});
		});
	};

	return (
		<section id="Projects">
			<div className="container">
				<h2 className="projects__title">Projects</h2>

				<div className="projects__layout">
					<div className="projects__left">
						{ProjectData.map((project, index) => (
							<div key={index} ref={addToRefs}>
								<ProjectCard
									website={project.website}
									name={project.name}
									src={project.screenshot}
									tech={project.tech}
								/>
							</div>
						))}
					</div>

					<div className="projects__right" ref={rightRef}>
						{ProjectData.map((project, index) => (
							<div
								key={index}
								className="projects__right-item"
								style={{
									opacity: index === 0 ? 1 : 0,
								}}
							>
								<ProjectDescription
									description={project.description}
									name={project.name}
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
