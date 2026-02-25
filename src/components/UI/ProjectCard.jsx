import React from 'react';
import { techStack } from '../../data/techData';
import ProjectTech from './ProjectTech';
const ProjectCard = ({ website, name, src, tech }) => {
  
  const filteredTech = techStack.filter((t) => tech.includes(t.name))

	return (
		<div
			className="project__card"
			style={{
				backgroundImage: `url(${src})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
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
          {
            filteredTech.map((t) => (
             <ProjectTech name={t.name} icon={t.icon} color={t.color} svg={t.svg}/>
            ))
          }
        </div>
			</div>
		</div>
	);
};

export default ProjectCard;
