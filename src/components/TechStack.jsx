import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TechCard from './UI/TechCard';
import { techStack } from '../data/techData';

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
	const trackRef = useRef(null);

	// duplicate for seamless loop
	const loopStack = [...techStack, ...techStack];

	useEffect(() => {
		const track = trackRef.current;
		if (!track) return;

		// ✅ Marquee smooth scroll using GSAP
		const totalWidth = track.scrollWidth / 2; // half because duplicated
		const speed = 60; // pixels per second
		const duration = totalWidth / speed;

		const tween = gsap.to(track, {
			x: -totalWidth,
			duration: duration,
			ease: 'linear',
			repeat: -1,
			force3D: true,
			modifiers: {
				x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
			},
		});

		// pause/resume on hover
		const marquee = track.parentElement;
		const pause = () => tween.pause();
		const resume = () => tween.resume();
		marquee.addEventListener('mouseenter', pause);
		marquee.addEventListener('mouseleave', resume);

		// ✅ Fade in heading + tech cards
		gsap.fromTo(
			'.techstack__container h2',
			{ y: 40, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.8,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.techstack__container',
					start: 'top 80%',
				},
			},
		);

		gsap.fromTo(
			'.tech__card',
			{ y: 20, opacity: 0 },
			{
				y: 0,
				opacity: 1,
				duration: 0.6,
				stagger: 0.1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '.techstack__container',
					start: 'top 80%',
				},
			},
		);

		return () => {
			tween.kill();
			marquee.removeEventListener('mouseenter', pause);
			marquee.removeEventListener('mouseleave', resume);
		};
	}, []);

	return (
		<section id="TechStack">
			<div className="techstack__container">
				<h2>Tech Stack</h2>

				<div className="techstack__marquee">
					<div className="techstack__track" ref={trackRef}>
						{loopStack.map((tech, index) => (
							<TechCard
								key={index}
								name={tech.name}
								icon={tech.icon}
								svg={tech.svg}
								color={tech.color}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default TechStack;
