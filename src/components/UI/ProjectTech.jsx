import React from 'react';

const ProjectTech = ({ name, icon: Icon, svg, color }) => {
    return (
		<div className="project__card--tech-card">
			<div className="project__card--tech-card--icon">
				{Icon ? (
					<Icon  color={color} />
				) : svg ? (
					<img className="project__card--svg" src={svg} alt={name} />
				) : null}
			</div>

			<span className="button--text text__color--normal">{name}</span>
		</div>
	);
};

export default ProjectTech;
