import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { techStack } from '../../data/techData';
import ProjectTech from './ProjectTech';

const ProjectCard = ({ website, name, src, tech }) => {
	const cardRef = useRef(null);

	// 🔥 magnetic hover
	useEffect(() => {
		const card = cardRef.current;
		if (!card) return;

		const handleMove = (e) => {
			const rect = card.getBoundingClientRect();
			const x = e.clientX - rect.left - rect.width / 2;
			const y = e.clientY - rect.top - rect.height / 2;

			gsap.to(card, {
				x: x * 0.12,
				y: y * 0.12,
				duration: 0.4,
				ease: 'power3.out',
			});
		};

		const handleLeave = () => {
			gsap.to(card, {
				x: 0,
				y: 0,
				duration: 0.5,
				ease: 'elastic.out(1, 0.4)',
			});
		};

		card.addEventListener('mousemove', handleMove);
		card.addEventListener('mouseleave', handleLeave);

		return () => {
			card.removeEventListener('mousemove', handleMove);
			card.removeEventListener('mouseleave', handleLeave);
		};
	}, []);

	// 🔥 filter tech
	const filteredTech = techStack.filter((t) => tech.includes(t.name));

	return (
		<div
			ref={cardRef}
			className="project__card"
			role="img"
			aria-label={`${name} project preview`}
			style={{
				backgroundImage: `url(${src})`,
			}}
		>
			<div className="project__card--text">
				<a
					href={website}
					target="_blank"
					rel="noopener noreferrer"
					className="link__hover--effect large"
				>
					View Site
				</a>

				<div className="project__card--tech-stack">
					{filteredTech.map((t) => (
						<ProjectTech
							key={t.name}
							name={t.name}
							icon={t.icon}
							color={t.color}
							svg={t.svg}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
