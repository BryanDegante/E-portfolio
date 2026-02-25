import React from 'react';

const ProjectDescription = ({ name, description }) => {
	return (
		<div className="project__description text__color--normal">
			<h3>{name}</h3>
			<p>{description}</p>
		</div>
	);
};

export default ProjectDescription;
