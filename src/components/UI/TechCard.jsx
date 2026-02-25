import React from 'react';

const TechCard = ({ name, icon: Icon, svg, color }) => {
	return (
		<div className="tech__card">
			<div className="tech__card--icon">
				{Icon ? (
					<Icon size={32} color={color} />
				) : svg ? (
					<img className="tech__card--svg" src={svg} alt={name} />
				) : null}
			</div>

			<span className="button--text text__color--normal">{name}</span>
		</div>
	);
};

export default TechCard;
