import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const TierCard = ({
	title,
	subtitle,
	price,
	list,
	best,
	selectTier,
	isActive,
}) => {
	const activeTier = title === isActive;

	return (
		<div className={`tier__Card ${activeTier ? 'active' : ''}`}>
			<div className="tier__left">
				<div className="tier__header">
					<div className="tier__title">
						<span className=" text__color--purple">
							{title} | ${price}
						</span>
						
					</div>
					<p className="text__color--normal">{subtitle}</p>
				</div>

				<div className="tier__description">
					<ul className=" tier__list text__color--muted">
						{list.map((e, index) => (
							<li className="text__color--blue" key={index}>
								{e}
							</li>
						))}
					</ul>
					<p className="text__color--muted">{best}</p>
				</div>
			</div>
			<button onClick={() => selectTier(title)}>
				<FaPlus className="" />
			</button>
		</div>
	);
};

export default TierCard;
