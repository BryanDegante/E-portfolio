import React from 'react';
import TechCard from './UI/TechCard';
import { techStack } from '../data/techData';

const TechStack = () => {
	return (
		<div id="TechStack">
			<div className="techstack__container">
				<h2 className="text__color--normal">Tech Stack</h2>

				<div className="techstack__grid">
					{techStack.map((tech, index) => (
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
	);
};

export default TechStack;
